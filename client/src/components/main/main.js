import React, {useEffect, UseState} from "react";
import Button from 'react-bootstrap/Button';
import CardComponent from "../card/card";
import MainCarousel from "../carousel/carousel";
import Footer from "../footer/footer";
import MainNavbar from "../navbar/navbar";






function Main() {




    return (  <>
      <MainNavbar/>
      
      <MainCarousel/>
    
      <h1 className='text-center my-4'>Инженер, техникч</h1>
      <CardComponent/>
        <h1 className='text-center my-4'>Цахилгааны монтер</h1>
      <CardComponent/>
      <Footer/>
    </>);
}

export default Main;