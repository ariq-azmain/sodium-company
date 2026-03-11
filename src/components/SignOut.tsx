'use client'
import { SignOutButton } from "@clerk/nextjs"

const SignOut = () => {
  return (
    <div className="">
      <SignOutButton>
        <button className="!p-2 bg-red-500 rounded-2xl text-md font-bold">Sing Out</button>
      </SignOutButton>
    </div>
  )
}
export default SignOut