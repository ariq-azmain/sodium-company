import Link from 'next/link'

import { navLinks } from '@/constant'

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
          <Link href="/ragister">ragister</Link>
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