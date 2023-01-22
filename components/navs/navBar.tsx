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
          <div className="navbar-item">
            <div className="buttons">
              <Link href={'https://www.linkedin.com/in/eduardo-moncada-lillo-25b336225/'} target={'_blank'} className='button is-link is-outlined' >Linked In</Link>
              <Link href={'mailto:monk.da15@gmail.com?Subject=Quiero%20saber%20mas%20sobre%20tu%20trabajo'} target={'_blank'} className='button is-danger is-outlined' >Enviar e-mail</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}