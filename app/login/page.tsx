
import GoogleLoginButton from "@/components/loginGoogleButton";
import Image from "next/image";

export default function Login(){
  return(
    <div className="bg-lighter w-full h-screen flex flex-col justify-center items-center gap-10">
      <Image src={'/servientrega-logo.png'} alt="logo-servientrega" width={100} height={100} />
      
      <GoogleLoginButton />
    </div>
  )
}