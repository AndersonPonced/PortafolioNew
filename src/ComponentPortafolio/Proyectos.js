import React from 'react'
import buena from '../img/buena.PNG'
import buenaa from '../img/porta.PNG'

export const Proyectos = () => {




  return (
    
    <div className='todo-caja'>
        
<h1 className='proyec'>Proyectos</h1>

<div className='cajas'>

<div className='caja-uno'>

<div className="card w-96 bg-base-100 shadow-xl ca">
  <figure><img src={buena} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      BuenaventurandoAndo
      <div className="badge badge-secondary">Primero</div>
    </h2>
    <p>Este es mi primer proyecto</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">HTML</div> 
      <div className="badge badge-outline">CSS</div>
    </div>
  </div>
</div>


</div>

<div className='caja-dos'>

<div className="card w-96 bg-base-100 shadow-xl caa">
  <figure><img src={buenaa} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Portafolio
      <div className="badge badge-secondary">Portafolio</div>
    </h2>
    <p>Este fue mi primer portafolio</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">HTML</div> 
      <div className="badge badge-outline">CSS</div>
      <div className="badge badge-outline">Javascript</div>
    </div>
  </div>
</div>


</div>



</div>

<div className='botoness'>
  <div className='bto'>
<a href='https://github.com/AndersonPonced/BuenaventurandoAndo' target={"_blank"} className='btn btn-primary'>Ver codigo </a>
</div>

<div className='btoo'>
<a href=' https://andersonponced.github.io/BuenaventurandoAndo/' target={"_blank"} className='btn btn-primary'>Ver Web </a>
</div>


</div>


<div className='botonesss'>
  <div className='btoe'>
<a href='https://github.com/AndersonPonced/portafolio' target={"_blank"} className='btn btn-primary'>Ver codigo </a>
</div>

<div className='btooo'>
<a href=' https://andersonponced.github.io/portafolio/' target={"_blank"} className='btn btn-primary'>Ver Web </a>
</div>


</div>


 

    </div>
  )
}

export default Proyectos
