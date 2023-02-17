import React from 'react'

import lol from '../img/lol.png'



export const Youtube = () => {



  return (
    <div>

<div className="card card-side bg-base-100  shadow-xl cardi">
  <figure className='im'><img src={lol} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">Youtube</h2>
    <p>Mantente activo con las canciones y podcast que subo en esta plataforma.🔥</p>
    <div className="card-actions justify-end">
    <a href='https://www.youtube.com/@andersonponce6115/featured' target={"_blank"}> <button className="btn btn-primary">Ir</button></a>
    </div>
  </div>
</div>

 

      
    </div>
  )
}

export default Youtube
