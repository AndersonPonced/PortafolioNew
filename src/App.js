 import './App.css';

 import React, {Suspense,useState} from 'react';
import {Navbar} from './Components/Navbar'

import {Portafolio} from './Pages/Portafolio';

import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import Casa from './Pages/Casa';
import Error from './Pages/Error';
import Footer from './Components/Footer';
 
import Loading from './Loading';
import Loadinge from './Loadinge'



function App() {


   


const [loading, setLoading] = useState(false);

const [loadinge, setLoadinge] = useState(false);




if(loading){

  return(
    <Loading/>
  )
}if(loadinge){
return(

  <Loadinge/>
)


}else{

 


  return (
    <>   



<BrowserRouter>
 

 <Navbar setLoading={setLoading} setLoadinge={setLoadinge} />

     
        <Routes>

<Route exact path='/' element={<Casa/>} />
<Route  path='/portafolio' element={<Portafolio/>} />
<Route path="*" element={<Error/>} />

</Routes>

     
     
 
      

</BrowserRouter>



<Footer/>

 


 </>   
  );
}
}

export default App;
