import { StaticImageData } from "next/image"
import React from "react"
import Card from "../components/projects/card"
import imgs from "../img/imagen1.jpg"
import style from '../styles/projects.module.css'
type Project = {
  img: StaticImageData[],
  title: string,
  desc: React.ReactNode,
  link: string,
  disabled: boolean
}
interface ProjectsProps {
  project: Project[]
}
const Projects = (Props: ProjectsProps): JSX.Element => {
  const {project} = Props

  return (
    <div>
      <div>
        <h1 className="title has-text-centered is-size-1 my-2">Mi portafolio</h1>
      </div>
      <div>
        <h3 className="subtitle has-text-centered is-size-3 my-2">Estos proyectos fueron creados principalmente con NodeJS, HTML, JavaScript, TypeScript y CSS a modo de práctica y no se encuentran 'en línea'.</h3>
      </div>
      <div className={style.projects}>
        {project.map((item, index)=> (
          <div key={index}>
            <Card img={item.img} title={item.title} desc={item.desc} link={item.link} disabled={item.disabled} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects