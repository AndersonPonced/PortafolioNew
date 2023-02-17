import React from 'react'
import Swal from 'sweetalert2'


 import lol from '../img/banner.mp4'

export const Carrousel = () => {

  const alert = ()=>{

    Swal.fire({
      title: 'El padrino!',
      text: 'Te invito a escuchar mi nueva interpretación con la flauta.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa_YaWrEvnjdwNusrFicUWZ-CgZIQORf1blg&usqp=CAU',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
    



  }
     
   




  return (
    <div>

<div className="hero min-h-screenv fa"> 

<video  autoPlay className='hero min-h-screenv faa'>
 <source src={lol} type='video/mp4' />
 </video>
  
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Bienvenidos</h1>
     
      <button className="btn btn-primary" onClick={()=>{alert()}}>Nuevo</button>
    </div>
    
  </div>
</div>



</div> 





        
      
    
  )
}

export default Carrousel
