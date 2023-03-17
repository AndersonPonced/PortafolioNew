import React from 'react'
import leon from '../img/leon.png'



export const Tiktok = () => {
  return (
    <div className='ty'>
      
      <div className="card card-side bg-base-100 shadow-xl cardii">
  <figure><img src={leon} alt="Movie"/></figure>
  <div className="card-body cuer">
    <h2 className="card-title">Tiktok</h2>
    <p>Mantente activo con lo que subo a esta plataforma.🔥</p>
    <div className="card-actions justify-end">
    <a href='https://www.tiktok.com/@dubronfresh' target={"_blank"}> <button className="btn btn-primary">Ir</button></a>
    </div>
  </div>
</div>



    </div>
  )
}

export default Tiktok
