import React from 'react'


import cv from '../curriculum/cv.pdf'


export const Curriculum = () => {
  return (
    <div className='btn-cv'>
      
   <div className='cv'>

     <a download={'prueba'} href={cv}>Descargar CV </a> 
    

   </div>



    </div>
  )
}

export default Curriculum
