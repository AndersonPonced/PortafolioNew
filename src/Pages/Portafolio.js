import React from 'react'
import Certificados from '../ComponentPortafolio/Certificados'
import Conocimientos from '../ComponentPortafolio/Conocimientos'
import Curriculum from '../ComponentPortafolio/Curriculum'
import Idiomas from '../ComponentPortafolio/Idiomas'
import Perfil from '../ComponentPortafolio/Perfil'
import Proyectos from '../ComponentPortafolio/Proyectos'
import Tre from '../Tre'
import edi from '../img/edi.png'


export const Portafolio = () => {
  return (
    <div>
      
  
<Perfil/>

<div className='anii'>

<p className='ani'>Sigueme en mis redes sociales</p>


</div>


<Tre/>

<Conocimientos/>
<Certificados/>
<Proyectos/>


<Idiomas/>

 
    </div>
  )
}

export default Portafolio
