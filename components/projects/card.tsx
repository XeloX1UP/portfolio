import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import styles from './card.module.css'
import './card.css'
import PImages from "./image";
interface CardProps {
  img: StaticImageData[],
  title: string,
  desc: React.ReactNode,
  link: string,
  disabled: boolean
}
const Card = (Props: CardProps): JSX.Element => {
  const {img, title, link, desc, disabled}: CardProps = Props


  return (
    <div className={styles['card-container']}>
      <div className={`${styles['image-container']}`}>
        <PImages image={img} title={title} />
      </div>
      <div className={styles['text-container']}>
        <div className="center" style={{width: '100%', height: '100%'}}>
          <h1 className={`is-size-2 ${styles.title}`}>{title}</h1>
          <div className={styles['link-container']}>
            <p className={`is-size-6 ${styles.subtitle}`}>{desc}</p>
            <Link className={`${styles.link} button ${disabled ? 'is-static' : 'is-link'} is-responsive is-rounded`} href={link} target={"_blank"} >Ver código</Link>
          </div>
        </div>
        
      </div>
    </div>
  )
}
export default Card