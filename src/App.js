 import './App.css';
 import './Responsive.css'

 import React, {Suspense,useState,useEffect} from 'react';
import {Navbar} from './Components/Navbar'

import {Portafolio} from './Pages/Portafolio';

import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import Casa from './Pages/Casa';
import Error from './Pages/Error';
import Footer from './Components/Footer';
 
import Loading from './Loading';
import Loadinge from './Loadinge';
import Albumnes from './Components/Albumnes';
 
 



function App() {


  




  const [isBlack, setIsBlack] = useState(
    () => localStorage.getItem("backgroundColor") === "black"
  );
  
  useEffect(() => {
    const savedColor = localStorage.getItem("backgroundColor");
    if (savedColor !== null) {
      setIsBlack(savedColor === "rgb(14, 14, 14)");
    }
  }, []);
  
  const handleButtonClick = () => {
    setIsBlack(!isBlack);
    localStorage.setItem("backgroundColor", !isBlack ? " rgb(14, 14, 14)" : "rgb(1, 9, 27)");
  };
  
  const backgroundColor = isBlack ? "rgb(14, 14, 14)" : "rgb(1, 9, 27)";
   
   


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
    <div style={{ backgroundColor }}>

<BrowserRouter>
 


 <Navbar handleButtonClick={handleButtonClick} isBlack={isBlack}  setLoading={setLoading} setLoadinge={setLoadinge} />

     


 



        <Routes>

<Route exact path='/' element={<Casa/>} />
 

<Route  path='/portafolio' element={<Portafolio/>} />
 
<Route path="*" element={<Error/>} />

</Routes>

     
     
 
      

</BrowserRouter>



<Footer/>

 


 

 
       
 
 
 

 

 
  

    </div>
    </>  
  );
}
}

export default App;
