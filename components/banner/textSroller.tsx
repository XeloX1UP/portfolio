'use client'
import { useState, useEffect } from 'react';
import style from '../../styles/carrousel.module.css'

interface Props {
  // no hay props en este componente pero si lo necesita se puede agregar aqui
}

const TextScroller: React.FC<Props> = () => {
  const [parrafos] = useState<string[]>([
    '¡Hola! Mi nombre es Eduardo Moncada y soy un desarrollador web titulado en la carrera de Analista de Sistemas y Programador, con experiencia en el desarrollo de sitios web. Mi fuerte es el desarrollo con tecnologías como Node.js, Express, HTML, CSS, JavaScript, React y NextJs, ofrezco servicios de diseño y desarrollo personalizados para ayudar a las empresas a aumentar su presencia en línea y mejorar su rendimiento.',
    'Con mi experiencia en estas tecnologías, puedo ayudar a tus clientes a crear un sitio web atractivo y funcional que se adapte a sus necesidades.',
    'Si estás buscando un desarrollador web confiable, experimentado y con una formación académica para ayudarte a mejorar tu negocio en línea, no dudes en ponerte en contacto conmigo. Estoy dispuesto a trabajar contigo para crear un sitio web excepcional que te ayudará a alcanzar tus objetivos de negocio. ¡No dudes en contactarme si tienes alguna pregunta o estás interesado en trabajar juntos!'
  ]);
  const [index, setIndex] = useState(0)
  useEffect(()=>{
    if (index >= parrafos.length) setIndex(0)
    setTimeout(()=>{
      setIndex(index + 1)
    }, 14000)
  }, [index])
  return (
    <div className="container">
      <p className={`${style.subtitle} is-size-4-tablet`}>{parrafos[index]}</p>
    </div>
  );
}

export default TextScroller;