import React from 'react'
import Swal from 'sweetalert2'


 import lol from '../img/estudio.jpg'

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
    <img src={lol} className="hero min-h-screen fa"/>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Bienvenidos</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary" onClick={()=>{alert()}}>Nuevo</button>
    </div>
    
  </div>
</div>



</div> 





        
      
    
  )
}

export default Carrousel
