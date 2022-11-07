import Carousel from 'react-bootstrap/Carousel';
import image from "../images/image1.jpg"
import image2 from "../images/image2.jpg"
import Container from 'react-bootstrap/esm/Container';
import { useState } from 'react';
import {Routes, Route, Link } from "react-router-dom";


function MainCarousel() {
  const [inputValue, setInputValue] = useState()


  const searchResult = ()=>{
  }



  return (
    <Container>
        <Carousel fade style={{borderRadius:"40px"}}>
            <Carousel.Item>
                <img
                style={{height: "400px", width:"800px", borderRadius:"40px"}}
                className="d-block w-100"
                src={image}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Цахилгааны инженер</h3>
                <p>Автоматжуулалтын инженер</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{height: "400px", width:"800px", borderRadius:"40px"}}
                className="d-block w-100"
                src={image2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Цахилгааны инженер</h3>
                <p>Зургийн инженер</p>
                </Carousel.Caption>
            </Carousel.Item>
         </Carousel>
         <div className="input-group mb-3 mt-4">
          <input style={{borderRadius: "30px 0px 0px 30px "}} type="text" onChange={e => setInputValue(e.target.value)} className="form-control" placeholder="Хайх утга оруулна уу" aria-label="Хайх утга оруулна уу" aria-describedby="basic-addon2" />
          <div className="input-group-append">
            <Link to={`/search/${inputValue}`}  onClick={searchResult}  style={{borderRadius: "0px 30px 30px 0px"}} className="btn btn-warning" type="">Хайх</Link>
          </div>
        </div>
    </Container>
  );
}

export default MainCarousel;