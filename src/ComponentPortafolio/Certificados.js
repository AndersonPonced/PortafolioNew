import React from 'react'
import front from '../img/front.png'
import back from '../img/back.png'



export const Certificados = () => {
  return (
    <div>
<div className='certix'>
   <h1 className='certi'>Certificados</h1>
   </div>
<br/><br/>

<div className='fronte'>
    <img className='front' src={front}/>
    </div>

    <div className='backe'>
      
    <img className='back' src={back}/>

    </div>


      
    </div>
  )
}

export default Certificados
