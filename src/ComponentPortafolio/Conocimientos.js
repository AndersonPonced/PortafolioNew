import React from 'react'

import html from '../lenguajes/html.png'
import css from '../lenguajes/css.png'
import javascript from '../lenguajes/javascript.png'
import react from '../lenguajes/react.png'
import mysql from '../lenguajes/mysql.png'
import node from '../lenguajes/node.png'
import git from '../lenguajes/git.png'
import sass from '../lenguajes/sass.png'


export const Conocimientos = () => {
  return (
    <div>
      <div className='conoxi'>
      <h1 className='conoci'>Conocimientos</h1>
      </div>
      <br/><br/><br/><br/><br/><br/><br/>

      <div className='todolen table table-dark mt-4 table-hover'>

      <div className='leno'>
     <img className='lengua html' title='Html 100%' src={html}/>
     <img className='lengua css' title='Css 80%' src={css}/>
     <img className='lengua java' title='Javascript 40%' src={javascript}/>
     <img className='lengua react' title='React 40%' src={react}/>
</div>

<div className='lenoo'>
     <img className='lengua sq' title='Mysql 5%' src={mysql}/>
     <img className='lengua' title='Node.js 5%' src={node}/>
     <img className='lengua giti' title='Git 30%' src={git}/>
     <img className='lengua' title='Sass 30%' src={sass}/>

     </div>
     </div>



    </div>
  )
}

export default Conocimientos
