import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { redirect } from "next/navigation";
import GoogleLoginButton from '../../components/loginGoogleButton'; // ✅ Direct import


export default async function Login() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <div className="bg-lighter w-full h-screen flex flex-col justify-center items-center gap-10">
      <Image src="/servientrega-logo.png" alt="logo-servientrega" width={100} height={100} />
      <GoogleLoginButton />
    </div>
  );
}
