import './contact.css'
import style from './contact.module.css'
import RsLinks from './rsLinks'
import fb from '../../img/facebook-logo.png'
import Lin from '../../img/linkedin-logo.png'
import Wsp from '../../img/whatsapp-logo.png'
import email from '../../img/emailIcon.png'
const Contact = (): JSX.Element => {
  return (
    <div className={style.contenedor}>
      <h1 className="is-size-1">Contáctame</h1>
      <div className={style['text-container']}>
        <div className={style.rrss}>
          <ul>
            <li><RsLinks link='https://www.facebook.com/eduardo.XeloX1UP' text='Facebook' image={fb} /></li>
            <li><RsLinks link='https://www.linkedin.com/in/eduardo-moncada-lillo-25b336225/' text='LinkedIn' image={Lin} /></li>
            <li><RsLinks link='https://wa.me/56933278825?text=Hola%20quiero%20saber%20mas%20sobre%20tu%20trabajo' text='Whatsapp' image={Wsp} /></li>
          </ul>
        </div>
        <div className="email">
          <h2><RsLinks link='https://wa.me/56933278825?text=Hola%20quiero%20saber%20mas%20sobre%20tu%20trabajo' text='Envíame un correo' image={email} /></h2>
        </div>
      </div>
    </div>
  )
}

export default Contact