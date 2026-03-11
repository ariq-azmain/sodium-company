import { currentUser } from "@clerk/nextjs/server"

import Link from 'next/link'

import { navLinks } from '@/constant'
import { SingIn, SingOut } from '@/components'

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
            <SingIn/>
            ) : (
              <SingOut/>
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