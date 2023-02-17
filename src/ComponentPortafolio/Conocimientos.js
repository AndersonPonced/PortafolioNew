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

      <div className='todolen'>

     <img className='lengua' title='Html 100%' src={html}/>
     <img className='lengua' title='Css 80%' src={css}/>
     <img className='lengua' title='Javascript 40%' src={javascript}/>
     <img className='lengua' title='React 40%' src={react}/>
     <img className='lengua' title='Mysql 5%' src={mysql}/>
     <img className='lengua' title='Node.js 5%' src={node}/>
     <img className='lengua' title='Git 30%' src={git}/>
     <img className='lengua' title='Sass 30%' src={sass}/>
     </div>



    </div>
  )
}

export default Conocimientos
