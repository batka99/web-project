import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from "../navbar/navbar"
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import icon from '../images/favicon.ico'
import MainNavbar from '../navbar/navbar';
import React, { useContext, useEffect, useState } from "react";
import axios from "../axios/axios"
import {useParams} from "react-router-dom"
import wal from "../images/image1.jpg"
import Carousel from 'react-bootstrap/Carousel';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";
import Footer from '../footer/footer'












function DetailModels() {
    const [data, setData] = useState([]);
    const {productId} = useParams()



    const dar = () => {
        console.log(data)
    }


    useEffect(() => {
   

        axios.get(`http://localhost:8080/models/${productId}`, {
            "Content-Type": "application/json"
        }).then((response)=>{
            
            setData(response.data.data)

                    });

        
      }, []);








    return ( 
    <>
    <Container >
        <Navbar/>


        <div className="card mb-3"  style={{  border:"none", borderRadius:"20px"}}>
        <div className="row g-0">
            <div className="col-md-6">
            <img  src={wal} className="img-fluid" alt="..." style={{  border:"none", borderRadius:"20px"}}/>
            </div>
            <div className="col-md-6">
            <div className="card-body">
                <h5 className="card-title text-center">{data.name}</h5>
                <div className='row m-4'>
                    <p className="card-text col-6"><span className='fw-bold'>Мэргэжил: </span><br/> <small>{data.profession}</small></p>
                    <p className="card-text col-6"><span className='fw-bold'>Хүйс: </span> <br/><small>эр</small> </p>
                    <p className="card-text col-6"><span className='fw-bold'>Цагийн хөлс: </span><br/> <small>{data.hourSalary} төг</small> </p>
                    <p className="card-text col-6"><span className='fw-bold'>Ажиллах боломжтой: </span><br/><small>09:00-18:00</small></p>
                    <p className="card-text col-6"><span className='fw-bold'>Цол: </span><br/><small>Beginner</small></p>
                    <p className="card-text col-6"><span className='fw-bold'>Ажлын туршлага: </span><br/><small>7 жил</small></p>
                </div>
                
            </div>
            </div>
        </div>
        </div>

        <div className="card mb-3 shadow-lg" style={{  border:"none", borderRadius:"20px", backgroundColor:""}} >
            <div className="row g-0">
                <div className="col-md-12">
                <div className="card-body">
                <h5 className="card-title text-center">Миний тухай</h5>
                    <p className='text-center p-4' >Намайг Батсүрэн гэдэг би цахилгааны инженер мэргэжилтэй. Энэ мэргэжилээрээ ажиллаад 7 дох жилдээ ажиллаж байна. Барилгын дотор монтаж болон өндөр хүчдэлийн цахилгаан хангамжийн ажил  гүйцэтгэж байснаас гадна цахилгаан хангамжийн зураг төслийн ажилыг мэргэжилийн өндөр түвшинд гүйцэтгэнэ.</p>            </div>
                </div>
            </div>
        </div>
        <div className="card mb-3"  style={{  border:"none", borderRadius:"20px"}}>
            <div className="row g-0">
                <div className="col-md-12">
                <div className="card-body">
                <h5 className="card-title text-center mb-3">Миний ур чадварууд</h5>
                <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 text-center">
                    <div className="col">
                        <div className="p-3 shadow  text-white" style={{backgroundColor:"#8458B3", borderRadius:"10px"}}><small>Зураг төсөл</small></div>
                    </div>
                    <div className="col">
                        <div className="p-3 shadow  text-white" style={{backgroundColor:"#8458B3", borderRadius:"10px"}}><small>Цахилгаан автоматжуулалт</small></div>
                    </div>
                    <div className="col">
                        <div className="p-3 shadow  text-white" style={{backgroundColor:"#8458B3", borderRadius:"10px"}}>Ухаалаг байшин</div>
                    </div>
                    <div className="col">
                        <div className="p-3 shadow  text-white" style={{backgroundColor:"#8458B3", borderRadius:"10px"}}>Үзүүр муфт </div>
                    </div>
                    <div className="col">
                        <div className="p-3 shadow  text-white" style={{backgroundColor:"#8458B3", borderRadius:"10px"}}>Дундын муфт</div>
                    </div>
                    <div className="col">
                        <div className="p-3 shadow  text-white" style={{backgroundColor:"#8458B3", borderRadius:"10px"}}>Реле суурилуулалт</div>
                    </div>
                    <div className="col">
                        <div className="p-3 shadow  text-white" style={{backgroundColor:"#8458B3", borderRadius:"10px"}}>Анкер угсралт</div>
                    </div>
                    <div className="col">
                        <div className="p-3 shadow  text-white" style={{backgroundColor:"#8458B3", borderRadius:"10px"}}>Камер суурилуулалт</div>
                    </div>
                    <div className="col">
                        <div className="p-3 shadow  text-white" style={{backgroundColor:"#8458B3", borderRadius:"10px"}}>Домофон систем</div>
                    </div>
                    <div className="col">
                        <div className="p-3 shadow  text-white" style={{backgroundColor:"#8458B3", borderRadius:"10px"}}>Реле хамгаалалт </div>
                    </div>
                </div>
       
                    </div>
                </div>
            </div>
        </div>
        <div className="card mb-3" style={{  border:"none", borderRadius:"20px"}} >
            <div className="row g-0">
                <div className="col-md-12">
                <div className="card-body">
                <h5 className="card-title text-center mb-3">Гүйцэтгэсэн ажлууд</h5>
                <div className="row row-cols-12 row-cols-lg-12 g-2 g-lg-3 text-center">

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
                        0: {slidesPerView:2, spaceBetween: 10},
                        480: {slidesPerView:2, spaceBetween: 10},
                        768: {slidesPerView:2, spaceBetween: 15},
                        1024: {slidesPerView:2, spaceBetween: 15},
                        1280: {slidesPerView:3, spaceBetween: 30},
                    }}

                    >
                        <>
                        <SwiperSlide>        
                            <div className='card' style={{borderRadius: "30px", backgroundColor:"#F4F6F7"}}>
                            <img style={{borderRadius: "20px"}}  src={wal} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>        
                            <div className='card' style={{borderRadius: "30px", backgroundColor:"#F4F6F7"}}>
                            <img style={{borderRadius: "20px"}} src={wal} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>        
                            <div className='card' style={{borderRadius: "30px", backgroundColor:"#F4F6F7"}}>
                            <img style={{borderRadius: "20px"}} src={wal} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>        
                            <div className='card' style={{borderRadius: "30px", backgroundColor:"#F4F6F7"}}>
                            <img style={{borderRadius: "20px"}} src={wal} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>        
                            <div className='card' style={{borderRadius: "30px", backgroundColor:"#F4F6F7"}}>
                            <img style={{borderRadius: "20px"}} src={wal} />
                            </div>
                        </SwiperSlide>
                        </>
            



        </Swiper>




                </div>
       
                    </div>
                </div>
            </div>
        </div>


        <Footer/>





    </Container>

    </> );
}

export default DetailModels;