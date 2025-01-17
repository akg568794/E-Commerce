"use client"

import { useWixClient } from "@/hooks/useWixClient";
import { LoginState } from "@wix/sdk";
import { usePathname } from "next/navigation";
import { useState } from "react"

enum MODE{
    LOGIN="LOGIN",
    REGISTER="REGISTER",
    RESET_PASSWORD="RESET_PASSWORD",
    EMAIL_VERIFICATION="EMAIL_VERIFICATION",

}

const Loginpage = () => {
    const [mode,setMode]=useState(MODE.LOGIN);
    const [userName,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPasword]=useState("");
    const [emailCode,setEmailCode]=useState("");
    const [isLoading,setIsLoading]=useState(false)
    const [error,setError]=useState("");
    const [message,setMessage]=useState("");
    const pathname=usePathname();
    const formTitle = mode===MODE.LOGIN ? "Log in" : mode===MODE.REGISTER ? "Register" : mode===MODE.RESET_PASSWORD ? 
    "Reset Your Password" :  "Verify Your Email"

    const buttonTitle = mode===MODE.LOGIN ? "Login" : mode===MODE.REGISTER ? "Register" : mode===MODE.RESET_PASSWORD ? 
    "Reset" :  "Verify"

    const wixClient=useWixClient();

    const handleSubmit=async (e:React.FormEvent)=>{
      e.preventDefault();
      setIsLoading(true);
      setError("");

      try{
        let response;

        switch(mode){
          case MODE.LOGIN:
            response=await wixClient.auth.login({
              email,
              password,
            });
            break;
          case MODE.REGISTER:
            response=await wixClient.auth.register({
              email,
              password,
              profile:{nickname:userName}
            });
            break;
          case MODE.RESET_PASSWORD:
            response=await wixClient.auth.sendPasswordResetEmail(
              email,pathname);
            break;
            case MODE.EMAIL_VERIFICATION:
              response=await wixClient.auth.processVerification({
                verificationCode:emailCode
              });
              break;
            default:
              break

      }
      console.log(response)
      switch(response?.loginState){
        case LoginState.SUCCESS:
          setMessage("Successfull! You are being redirected.")
      }
    }catch(error){
        console.log(error);
        setError("Something went wrong")

    }finally{
        setIsLoading(false);
      }

    }
  return (
    <div className="h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center">
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
            <h1 className="text-2xl font-semibold">{formTitle}</h1>

            {mode==MODE.REGISTER ? 
            (<div className="flex flex-col gap-2">
              <label className="text-sm text-gray-700">Username</label>
                <input type="text" name="username" placeholder="john" className="ring-2 ring-gray-300 rounded-md p-4"
                onChange={e=>setUsername(e.target.value)}/>
            </div>)
            : null}
            {
              mode!==MODE.EMAIL_VERIFICATION ?
              (<div className="flex flex-col gap-2">
                <label className="text-sm text-gray-700">Email</label>
                  <input type="email" name="email" placeholder="abc@gmail.com" className="ring-2 ring-gray-300 rounded-md p-4" 
                  onChange={e=>setEmail(e.target.value)}/>
              </div>
              ):
              (
                <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-700">Verification Code</label>
                  <input type="text" name="emailCode" placeholder="Code" className="ring-2 ring-gray-300 rounded-md p-4"/>
              </div>
              )
              }
              {mode===MODE.LOGIN || mode===MODE.REGISTER ? (
                <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-700">Password</label>
                  <input type="password" name="password" placeholder="Enter your password" className="ring-2 ring-gray-300 rounded-md p-4"
                  onChange={e=>setPasword(e.target.value)}/>
              </div>
              ):
              (null)}
              {mode===MODE.LOGIN && <div className="text-sm underline cursor-pointer" onClick={()=>setMode(MODE.RESET_PASSWORD)}>Forgot Password</div>}
              <button className="bg-ak text-white p-2 rounded-md disabled:bg-pink-200 disabled:cursor-not-allowed" disabled={isLoading}>{isLoading ?  "Loading...":buttonTitle}</button>
              {error && <div className="text-red-600">{error}</div>}
              {mode===MODE.LOGIN && (
                <div className="text-sm underline cursor-pointer" onClick={()=>setMode(MODE.REGISTER)}>Don't have an account?</div>
              )}
              {mode===MODE.REGISTER && (
                <div className="text-sm underline cursor-pointer" onClick={()=>setMode(MODE.LOGIN)}>Have an account?</div>
              )}
              {mode===MODE.RESET_PASSWORD && (
                <div className="text-sm underline cursor-pointer" onClick={()=>setMode(MODE.LOGIN)}>Go back to Login</div>
              )}
              {message && <div className="text-green-600 text-sm">{message}</div>}
        </form>
        
    </div>
  )
}

export default Loginpage

