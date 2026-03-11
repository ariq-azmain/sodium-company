'use client'
import { SignInButton } from "@clerk/nextjs"

const SignIn = () => {
  return (
    <SignInButton>
      <button className="sing-in-btn flex m-10 font-black
            bg-gradient-to-tl to-[#0fff9e] from-[#09fcff] rounded-xl h-8 w-16
            text-gray-200 relative justify-center items-center text-sm">
        Sing In
      </button>
    </SignInButton>
  )
}
export default SignIn;