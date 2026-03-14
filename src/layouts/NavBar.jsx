import Link from 'next/link'

import { navLinks } from '@/constant'

const NavBar = () => {
  // const { isLoaded, isSignedIn, user } = useUser();
  return (
    <header>
      <nav>
        <Link href="#" className="bg-white h-full">
          <div className="logo">
            <img src="/images/icons/logo.png" alt="logo" />
            <span>SODUM</span>
          </div>
        </Link>

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