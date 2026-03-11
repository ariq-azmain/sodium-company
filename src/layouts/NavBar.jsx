import { currentUser, SignInButton, SignOutButton } from "@clerk/nextjs/server";

import Link from 'next/link'

import { navLinks } from '@/constant';

const NavBar = async () => {
  try {
    user = await currentUser();
  } catch (error) {
    console.error("Clerk Connection Error:", error);
  }
  return (
    <header>
      <nav>
      <Link href="/">
        <div className="logo">
          <span>SODUM</span>
        </div>
      </Link>
        <div className="sing-in-btn-container overflow-visible bottom-[13px]">
        { 
        !user ? (
          <SignInButton>
          
          <button className="sing-in-btn flex m-10 font-black
            bg-gradient-to-tl to-[#0fff9e] from-[#09fcff] rounded-xl h-8 w-16
            text-gray-200 relative justify-center items-center text-sm">
              Sing In
            </button>
          </SignInButton>
            ) : (
              <div className="">
                <p>{user.id}</p>
                <p>{user.firstName}</p>
                <SignOutButton>Sing Out</SignOutButton>
              </div>
            )
        }
        </div>
        <ul>
          {
            navLinks.map(({ name, href, id }) => (
            <li key={id}><Link href={href} className="NavLink" >{name}</Link></li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}

export default NavBar