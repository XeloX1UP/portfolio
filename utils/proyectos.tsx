import { StaticImageData } from "next/image"
import React from "react"
import images from './projectImages'
type Project = {
  img: StaticImageData[],
  title: string,
  desc: React.ReactNode,
  link: string
}
const proyectos: Project[] = [
  {
    img: images.rick,
    title: 'Personajes de Rick & Morty',
    desc: <>Uno de mis primeros proyectos de práctica, para comprender el uso de <strong>Fetch()</strong> y <strong>React</strong>.</>,
    link: '/'
  },
  {
    img: images.firstLanding,
    title: '1° Landing page',
    desc: <>Continuación de mi práctica con <strong>React</strong> y la creación de <strong>componentes</strong>.</>,
    link: '/'
  },
  {
    img: images.secondLanding,
    title: '2° Landing page',
    desc: <>Mi segundo landing page en el cual ya tenía mayor manejo de <strong>CSS</strong> y <strong>animaciones</strong>.</>,
    link: '/'
  },
  {
    img: images.tips,
    title: 'Distribuidor de propinas',
    desc: <>Aplicacion web para la distribución de propinas dentro de un restaurant.<br/>Desarrollada con <strong>Express</strong>, <strong>HBS</strong> y <strong>MySQL</strong>.</>,
    link: '/'
  },
  {
    img: images.barApp,
    title: 'Recetario para coctelería',
    desc: <>Aplicacion web donde puedes crear tus recetas para compartirlas y buscar recetas para cócteles. <br/> Desarrollada con <strong>Express</strong>, <strong>HBS</strong> y <strong>MongoDB</strong>.</>,
    link: '/'
  },
  {
    img: images.store,
    title: 'Tienda web',
    desc: <>Tienda básica donde se pueden <strong>crear</strong>, <strong>editar</strong> y <strong>eliminar productos</strong> y <strong>categorías</strong>. <br/>Desarrollada con <strong>Next JS v16</strong> y <strong>MongoDB</strong></>,
    link: '/'
  }
]

export default proyectos