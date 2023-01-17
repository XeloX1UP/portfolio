'use client'

import Image from "next/image"
import Link from "next/link"
import logo from '../../img/logoNav.png'
import style from '../../styles/navBar.module.css'
export default function NavBar () {
  return (
    <nav className={`navbar ${style.nav} is-dark`} role="navigation" aria-label="main navigation">
      <div className={`navbar-brand`}>
        <Link className={`${style['navbar-item']}`} href="/">
          <Image alt="logo-nav" src={logo} width={60} height={60} />
        </Link>
        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link className={`navbar-item `} href='/'>
            Inicio
          </Link>
          <Link href='/' className="navbar-item">
            Contáctame
          </Link>
        </div>
        <div className="navbar-end">
          
        </div>
      </div>
    </nav>
  )
}