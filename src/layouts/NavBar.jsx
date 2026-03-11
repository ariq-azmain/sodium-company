'use client';
import { useUser } from '@clerk/nextjs';
import { useState } from 'react';
import Link from 'next/link'

import { navLinks } from '@/constant'
import { SignIn } from '@/components'

const NavBar = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  return (
    <header>
      <nav>
        <Link href="/">
          <div className="logo">
            <span>SODUM</span>
          </div>
        </Link>
        <div className="sing-in-btn-container overflow-visible bottom-[13px]">
           {!isLoaded ? (
            <div>Loading ...</div>
          ) : isSignedIn ? (
              <a href='/user/'>
                <img className="h-[45px] w-[45px]" src="/images/icons/user.svg" alt="profile"/>
              </a>
          ) : (
            <SignIn />
          )}
          {
            isSignedIn && (
              <a href='/user/'>
                <img className="h-[45px] w-[45px]" src="/images/icons/user.svg" alt="profile"/>
              </a>
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