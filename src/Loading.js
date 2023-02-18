import React from 'react'
import Informacion from './componentsLoading/Informacion'
import SaludoPorta from './componentsLoading/SaludoPorta'
import lol from './img/port.mp4'


export const Loading = () => {
  return (
 
<div>


 


      <div className='dubrondi'>
     
     
     <video  autoPlay loop className='hero min-h-screenv fa'>
  <source src={lol} type='video/mp4' />
  </video>
 
 
  
       
     </div>
</div>

  
     
  )
}

export default Loading
