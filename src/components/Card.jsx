'use client';
import {Tilt} from "react-tilt"

const Card = ({title, text}) => {
  return (
    <div className="text-center !py-[20px]">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 550,
        }}
        className='!p-5 !m-[30px] rounded-2xl sm:w-[360px]
        bg-[rgb(255,255,255,0.05)] inline-block bg-blur border
        border-[rgba(255,255,255,0.15)] card'
      >
      <h1 className="text-xl font-bold">{title}</h1> 
       <p className="font-light text-sm">{text}</p>
      </Tilt>
    </div>
  )
}

export default Card