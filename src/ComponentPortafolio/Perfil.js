import React from 'react'

import perfil from '../img/perfil.jpg'



import luna from '../img/luna.jpg'
import Curriculum from './Curriculum'


export const Perfil = () => {








  return (







     <div>
 

 
<div className='todo'>

    <div className='perfil'>

<div className="avatar">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={perfil} />

  </div>


</div>
      
    </div>

    <div className='flow'>
    <div className='yo'>

 <div className='contenido'>

<h2 className='deve'>¿Quién soy?</h2>
<br/>
<div className='todo-nombre'>
  
<h3 className='nombre'>Mi nombre es Anderson Ponce, tengo 19 años de edad, mi actual residencia es Argentina y soy un Desarrollador Web</h3>
</div>

</div>
 </div>

    </div>

    </div>

    <Curriculum/>


    </div>
  )
}

export default Perfil
