'use client'
import { useState } from 'react'
import clsx from 'clsx'
import { useMediaQuery } from 'react-responsive'
import { FaXmark } from 'react-icons/fa6'

import useAlert from '@/hooks/useAlert.js'

const Alert = () => {

  const isMobile = useMediaQuery({ maxWidth: 767 })
  const [alert, hide] = useAlert()
  const { color, title, text, buttonText, show, className } = alert;
  
  const closeAlert = () => hide();
  
  /*
switch (mode) {
    case "error":
      setTheme("#f00")
      setTitle("Error")
      break;
    case "warn":
      setTheme("#ffa000")
      setTitle("Warning")
      break;
    case "susses":
      setTheme("#0bff79")
      setTitle("Susses full")
      break;
    case "info":
      setTheme("#000225")
      setTitle("Notice")
      break;
    default:
      setTheme("#000") 
      setTitle("")
  } 

if (mode ==="error") {
    setTheme("#f00")
    setTitle("Error")
  } else if (mode === "warn") {
    setTheme("#ffa000")
    setTitle("Warning")
  }else if (mode ==="susses") {
    setTheme("#0bff79")
    setTitle("Susses full")
  }else if (mode === "info") {
    setTheme("#000225")
    setTitle("Notice")
  } else {
    setTheme("#000") 
    setTitle("")
  }
   className={isMobile ? "fixed top-[160px] left-[15px]":
    "fixed bottom-[80px] right-[20px]"}
*/

  return (
    <>
      {show && (
        <section className={isMobile ? `fixed top-[15px] left-[90px] z-[5000000000000] ${className}`:`fixed bottom-[80px] right-[20px] z-[5000000000000] ${className}`}>
          <div className={`overflow-hidden max-w-xs box-border border-[10px]
      rounded-2xl font-black shadow-2xl shadow-black transition-all
      duration-1000 ${className}`} style={{
              backgroundColor: color,
              borderColor: color
            }}>
            <button onClick={closeAlert} className={`text-lg ${className}`}>
              <FaXmark />
            </button>
            <div>
              <h4 className={`text-2xl text-center ${className}`}>{title}</h4>
              <p>{text}</p>
            </div>
            <button type="button" className={`bg-blue-950 border-8
          border-blue-950 rounded-xl text-[#c3e2e4] ${className}`} onClick={closeAlert}>
              {buttonText}
            </button>
          </div>
        </section>
      )
      }
    </>
  )
}
export default Alert;