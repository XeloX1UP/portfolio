'use client'
import { ReactNode, MouseEventHandler } from "react"

interface SubmitBtnProps {
  children: ReactNode,
  handleClick: MouseEventHandler<HTMLButtonElement>
}

// const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
//   e.preventDefault()
//   console.log('Boton funcionando de pana')
  
// }
export default function SubmitBtn ({ children, handleClick }: SubmitBtnProps) {
  return (
    <button 
      className=""
      onClick={handleClick} 
    >
      {children}
    </button>
  )
}