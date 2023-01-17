import { StaticImageData } from "next/image"
import img1 from '../img/projects/barApp1.png'
import img2 from '../img/projects/firstLanding1.png'
import img3 from '../img/projects/firstLanding2.png'
import img4 from '../img/projects/rick1.png'
import img5 from '../img/projects/rick2.png'
import img6 from '../img/projects/secondLanding1.png'
import img7 from '../img/projects/secondLanding2.png'
import img8 from '../img/projects/store1.png'
import img9 from '../img/projects/store2.png'
import img10 from '../img/projects/store3.png'
import img11 from '../img/projects/store4.png'
import img12 from '../img/projects/store5.png'
import img13 from '../img/projects/tips1.png'
import img14 from '../img/projects/tips2.png'
import img15 from '../img/projects/tips3.png'
import img16 from '../img/projects/tips4.png'

type Images = {
  barApp: StaticImageData[],
  firstLanding: StaticImageData[],
  rick: StaticImageData[],
  secondLanding: StaticImageData[],
  store: StaticImageData[],
  tips: StaticImageData[]
}
const ProjectImages: Images = {
  barApp: [img1],
  firstLanding: [img2, img3],
  rick: [img4, img5],
  secondLanding: [img6, img7],
  store: [img8, img9, img10, img11, img12],
  tips: [img13, img14, img15, img16],
}

export default ProjectImages