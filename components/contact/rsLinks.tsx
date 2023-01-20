import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import style from './contact.module.css'
interface RsLinksProps {
  link: string,
  text: string,
  image: StaticImageData
}
const RsLinks = (Props: RsLinksProps): JSX.Element => {
  const { link, text, image } = Props
  return (
    <div style={{display: 'flex', flexFlow: 'row nowrap', alignItems: 'center', justifyContent: 'flex-end'}}>
      <Link target={"_blank"} className={`${style.link} is-size-5`} href={link} >{text}<Image src={image} alt={text} width={25} height={25} /></Link>
    </div>
  )
}
export default RsLinks