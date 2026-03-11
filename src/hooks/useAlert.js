'use client';
import { useState } from 'react'

const useAlert = () => {
  const [alert, setAlert] = useState({
    show: false,
    title: '',
    text: '',
    color: '',
    buttonText: '',
    className: 'hidden'
  })
  const show = (title, text, color, buttonText) => setAlert({
    show: true,
    title: title,
    text: text, 
    color: color, 
    buttonText: buttonText, 
    className: null
  })
  const hide = () => setAlert({
    show: false, 
    title: '',
    text: '',
    color: '', 
    buttonText: '',
    className: 'hidden' })
  return [alert, show, hide]
}

export default useAlert