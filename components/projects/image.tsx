'use client'
import Image, { StaticImageData } from "next/image"
import { useEffect, useState } from "react"


interface PImagesProps {
  image: StaticImageData[],
  title: string
}

const PImages = (Props: PImagesProps): JSX.Element => {
  const {image, title} = Props
  const [index, setIndex] = useState(0)
  useEffect(()=> {
    const maxIndex = image.length - 1

    setTimeout(() => {
      if (index >= maxIndex) {
        setIndex(0)
      } else {
        setIndex(index + 1)
      }
    }, 5000)
  }, [index])
  
  return (
    <Image src={image[index]} alt={title} fill objectFit="cover"/>
  )
}
export default PImages