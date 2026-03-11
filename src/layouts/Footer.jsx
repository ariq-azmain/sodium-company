'use client';

import Image from 'next/image';
import Link from 'next/link'

import { socialLinks, navLinks } from '@/constant';

const Footer = () => {
  const capyEmail = () => {
    navigator.clipboard.writeText('company@sodium.com')
  }
  return (
    <>
      <footer className="overflow-hidden cursor-pointer">
        <br />
        <div>
          <h3 className="overflow-hidden text-center text-4xl md:text-6xl
        font-black bg-[#03030f]">Social Links.</h3>
          <ul>
            {
              socialLinks.map(({ id, name, icon, link }) => (
                <Link href={link} key={id} className="">
                  <li className="bg-[#050512] text-center flex flex-row
                  gap-[10px]">
                    {id === 1 && (<br />)}
                    <span>
                      <Image 
                      src={icon} 
                      alt={name} 
                      className='h-[40px] sm:h-[45px] md:h-[50px] lg:h-[55px] xl:h-[60px] 2xl:h-[70px] w-[40px] sm:w-[45px] md:w-[50px] lg:w-[55px] xl:w-[60px] 2xl:w-[70px]'
                      width={500}
                      height={500} 
                      />
                      <p className="text-lg font-black text-[#9293ac]">{name}</p>
                    </span>
                    <br />
                  </li>
                </Link>
              ))
            }
          </ul>
        </div>
        <div onClick={capyEmail} className="block text-2xl md:text-3xl lg:text-4xl text-center font-black text-[#cfdaff] bg-[#000]">
          <br />
          company@
          <span className="sodium">sodium</span>
          .com
          <br />
          <br />
        </div>
        <div>
          <h3 className="overflow-hidden text-center text-4xl md:text-6xl
        font-black bg-[#03030f]">Quick Links.</h3>
          <ul>
            {
              navLinks.map(({ id, name, href }) => (
                <Link href={href} key={id}>
                  <li className="bg-[#050512] text-center text-lg font-black
                text-[#c9c9e1] underline">{name}</li>
                </Link>
              ))
            }
          </ul>
          <p></p>
        </div>
      </footer>
      <br />
      <br />
      <br />
    </>
  )
}

export default Footer