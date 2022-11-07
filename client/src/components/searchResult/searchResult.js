
import React, { useContext, useEffect, useState } from "react";
import axios from "../axios/axios"
import Container from 'react-bootstrap/esm/Container';
import {useParams} from "react-router-dom"
import {Routes, Route, Link } from "react-router-dom";
import Main from "../main/main";
import Navbar from "../navbar/navbar";










function SearchResult(props) {
    
    const [search, setSeach] = useState()
    const [data, setData] = useState()
    const {searchId} = useParams()





        useEffect(() => {
   

            axios.get(`http://localhost:8080/search/${searchId}`, {
                "Content-Type": "application/json"
            }).then((response)=>{
                
                setData(response.data.data)
                console.log(response.data.data)
    
                });
    
            
          }, []);








    

    return (  
    
    <>
    <Container>
        <Navbar/>
    {data? data.map((element)=>(<>
        <div className='card mt-4' style={{borderRadius: "30px", backgroundColor:"#F4F6F7"}}>
                <div class="navbar-brand" href="#">
                    <ul className='row ' style={{listStyleType:"none"}}>
                        <li className='col-4'><img className='mt-4 mx-2' src="" width={80} height={70} style={{borderRadius:"20px"}} alt /></li>
                        <li className='col-4 mt-4'><h3>{element.name}</h3><p  style={{color:"grey"}}>{element.profession}</p></li><br/>
                    </ul>
                    <ul className='text-center' style={{listStyleType:"none", color:"black"}}> 
                    <li className='col-4 mx-1'> Ажиллах боломжтой цаг: {element.workingTime} </li>
                    <li className='col-3 mx-1'> Цагийн хөлс:  {element.hourSalary} төг</li>
                    </ul>
                </div>
                <Link to={`/details/${element._id}`} className='m-4 btn btn-warning'>CV үзэх</Link>

                </div>
            </>)):""}

    </Container>


    </>);
}

export default SearchResult;