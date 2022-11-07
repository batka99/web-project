import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import image from "../images/image1.jpg"
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Clock, Cash } from 'react-bootstrap-icons';
import axios from "../axios/axios"
import React, { useContext, useEffect, useState } from "react";
import {Routes, Route, Link } from "react-router-dom";









function CardComponent() {
    const [data, setData] = useState();



    const dar = () => {

        console.log(data)
    }


    useEffect(() => {
   

        axios.get('http://localhost:8080/models', {
            "Content-Type": "application/json"

        }).then((response)=>{
            
            setData(response.data.data)
            console.log(response.data.data)

                    });

        
      }, []);





  return (
    <Container className='mt-4'>
        <Swiper
        freeMode={true}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        autoplay={{ delay: 2000 }}
        effect="Cube"
        grabCursor={true}
        modules={[Autoplay]}

        className="mySwiper"
        breakpoints={{
            0: {slidesPerView:1 , spaceBetween: 10},
            480: {slidesPerView:1, spaceBetween: 10},
            768: {slidesPerView:2, spaceBetween: 15},
            1024: {slidesPerView:2, spaceBetween: 15},
            1280: {slidesPerView:3, spaceBetween: 30},
        }}

        >
            <>{data? data.map((element)=>(<>
            <SwiperSlide>        
                <div className='card' style={{borderRadius: "30px", backgroundColor:"", border:"none", boxShadow:"40px"}}>
                <div class="navbar-brand" href="#">
                    <ul className='row ' style={{listStyleType:"none"}}>
                        <li className='col-4'><img className='mt-4 mx-2' src={image} width={80} height={70} style={{borderRadius:"20px"}} alt /></li>
                        <li className='col-4 mt-4'><h3>{element.name}</h3><p  style={{color:"grey"}}>{element.profession}</p></li><br/>
                    </ul>
                    <ul className='text-center' style={{listStyleType:"none", color:"black"}}> 
                    <li className='col-4 mx-1'><Clock color="green" /> Ажиллах боломжтой цаг: {element.workingTime} </li>
                    <li className='col-3 mx-1'><Cash color="green"/> Цагийн хөлс:  {element.hourSalary} төг</li>
                    </ul>
                </div>
                <Link to={`details/${element._id}`} className='m-4 btn text-white' style={{backgroundColor:"#8458B3"}}>CV үзэх</Link>

                </div>
            </SwiperSlide>
            </>)):""}</>
            



        </Swiper>





        </Container>
  );
}

export default CardComponent;