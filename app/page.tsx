import Banner from "./banner";
import Projects from "./projects";
import proyectos from "../utils/proyectos";
import Contact from "../components/contact/contact";

export default function landingPage(){
  return (
    <div className="container is-desktop">
      <section id="banner" style={{marginTop: '40px'}}>
        <Banner />
      </section>
      <section id="proyectos" style={{marginTop: '100px'}}>
        <Projects project={proyectos}/>
      </section>
      <section id="contacto">
        <Contact />
      </section>
    </div>
  )
}