'use client'

import Image from "next/image"
import Link from "next/link"
import { MouseEventHandler, useState } from "react"
import logo from '../../img/logoNav.png'
import style from '../../styles/navBar.module.css'
export default function NavBar () {
  const [active, setActive] = useState(false)
  const handleClick: MouseEventHandler<HTMLAnchorElement> = () => {
    setActive(!active)
  }
  return (
    <nav className={`navbar ${style.nav} is-transparent`} role="navigation" aria-label="main navigation">
      <div className={`navbar-brand`}>
        <Link className={`${style['navbar-item']}`} href="/">
          <Image alt="logo-nav" src={logo} width={60} height={60} />
        </Link>
        <a onClick={handleClick} role="button" className={`navbar-burger ${active ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navbar">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbar" className={`navbar-menu ${active ? 'is-active' : ''}`}>
        <div className="navbar-start">
          <Link className={`navbar-item `} href='/'>
            Inicio
          </Link>
          <a href='#contacto' className="navbar-item">
            Contáctame
          </a>
        </div>
        <div className="navbar-end">
          
        </div>
      </div>
    </nav>
  )
}