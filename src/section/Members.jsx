'use client';
import { FaExternalLinkAlt } from 'react-icons/fa';

import { members } from '@/constants';
import {BallCanvas} from '@/canvas';

const Members = () => {
  return (
    <>
    <h1  className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] !m-[20px] block '>
      Members Of <span className='sodium'>SODIUM</span>
    </h1>
    <section className='flex flex-row flex-wrap justify-center'>
    {
      members.map(({id, name, dec, fild, img, link, color }) => (
        <div key={id} className='!w-[180px] !h-fit !my-[10px] !mx-[20px]'>
          <BallCanvas icon={img} color={color} />
          <div className='!p-2.5 box-border'>
          <div className='!mx-1.5'>
            <h4 className='text-xl text-[#e7fffe] font-black text-center'>{name}</h4>
            <p className='font-light text-sm text-[#d5d7e3] text-center'>{dec}</p>
          </div>
          <div className='!mx-3 w-fit h-fit !pb-[5px] !pl-[5px] overflow-hidden'>
            {
              fild.map((f, i)=>(
                <p key={i} className='!mx-1 !my-2 !p-1.5 g6 bg-clip-padding w-fit
                ring-2 ring-violet-400  rounded-2xl text-gray-300 font-black
                text-xs box-border'>{f}</p>
              ))
            }
            <a href={link} className='mt-1.5 font-black font-serif text-sm
            text-indigo-200 ring-1 ring-gray-500 rounded-lg !p-1.5'>Learn More <FaExternalLinkAlt className='inline'/></a>
          </div>
          </div>
        </div>
      ))
    }
    </section>
</>
  )
}

export default Members;