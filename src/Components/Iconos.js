import React from 'react'

import git from '../img/git.png'
import li from '../img/li.png'


export const Iconos = () => {
  return (
    <div className='hover lg'>
      
      <div className='gitt'>
  
  <a href='https://github.com/AndersonPonced' target={"_blank"} title={'Github'}> <img  className='gitt' src={git}/></a>


      </div>


      <div className='li'>
  
  <a title='Likedin' href='https://www.linkedin.com/in/anderson-ponce/' target={"_blank"}> <img src={li}  className='lii'/></a>


      </div>





    </div>
  )
}

export default Iconos
