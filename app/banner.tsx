import Image from "next/image";
import style from "../styles/home.module.css"
import img from '../img/banner.png'
import TextScroller from "../components/banner/textSroller";
const Banner = (): JSX.Element => {
  return (
    <div className={style.banner}>
        <Image className={style.img} src={img} alt="banner image info" fill objectFit="cover" priority />
        <div className={style.bannerTexts}>
          <h1 className={`${style.title} is-size-1`}>Desarrollador web</h1>
          <TextScroller />
        </div>
      </div>
  )
}
export default Banner;