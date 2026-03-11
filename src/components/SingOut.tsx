'use client'
import { SignOutButton } from "@clerk/nextjs"

const SingOut = () => {
  return (
    <div className="">
      <p>{user.id}</p>
      <p>{user.firstName}</p>
      <SignOutButton>Sing Out</SignOutButton>
    </div>
  )
}
export default SingOut