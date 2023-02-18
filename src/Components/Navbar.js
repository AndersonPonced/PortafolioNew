import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import Casa from '../Pages/Casa';
import Portafolio from '../Pages/Portafolio';
import ReactPlayer from 'react-player';

import Swal from 'sweetalert2'

export const Navbar = ({setLoading,setLoadinge}) => {

  
 




const navigate = useNavigate()
  

 


const alert = ()=>{

  Swal.fire({
    title: 'Gracias por visitar mi mundo virtual!!!!',
    width: 600,
    padding: '3em',
    color: '#716add',
    background: 'rgba(42,48,60) url(../img/we.png)',
    backdrop: `
      rgba(0,0,1,0.4)
      url("../img/we.png")
      left top
      no-repeat
    `
  })
}
 
const cambiarEstado = ()=>{

  setLoading(true);
  setTimeout(()=>{
    setLoading(false);
  }, 3250);

}

const cambiarEstadoo = ()=>{

  setLoadinge(true);
  setTimeout(()=>{
    setLoadinge(false);
  }, 3250);

}



  return (
    <div>
      
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li onClick={()=>{cambiarEstadoo()}}><a onClick={()=>{navigate("/")}}>Casa</a></li> 
     <li onClick={()=>{cambiarEstado()}}><a onClick={()=>{navigate("/portafolio")}}>Portafolio</a></li>
      <li><a>Blog</a></li>
      </ul>
    </div>
    <a  onClick={()=>{alert() }} className="btn btn-ghost normal-case text-xl" title='Versión 1.0'>Anderson</a>
  </div>
  <div className="navbar-center hidden lg:flex in">
    <ul className="menu menu-horizontal px-1 ">
    
  
     <li onClick={()=>{cambiarEstadoo()}}><a onClick={()=>{navigate("/")}}>Casa</a></li> 
     <li onClick={()=>{cambiarEstado()}}><a  onClick={()=>{navigate("/portafolio")}}>Portafolio</a></li> 
      <li><a href='https://zonadiarte.blogspot.com/' target={"_blank"}>Blog</a></li>
      
  
    </ul>
  </div>
 



 
 
</div>




    </div>
  )
}

export default Navbar
