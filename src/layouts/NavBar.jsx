'use client';
import { useUser } from '@clerk/nextjs';
import { useState } from 'react';
import Link from 'next/link'

import { navLinks } from '@/constant'
import { SingIn, SingOut } from '@/components'

const NavBar = () => {
  // const { isLoaded, isSignedIn, user } = useUser();
  return (
    <header>
      <nav>
        <Link href="/">
          <div className="logo">
            <span>SODUM</span>
          </div>
        </Link>
        <div className="sing-in-btn-container overflow-visible bottom-[13px]">
{/*           {!isLoaded ? (
            <div>Loading ...</div>
          ) : isSignedIn ? (
            <SingOut />
          ) : (
            <SingIn />
          )}
          {
            isSignedIn && (
              <p className="font-black text-xl text-blue-800">{user.firstName}</p>
            )
          } */
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