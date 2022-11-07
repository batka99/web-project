import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";
import { Test } from './components/test';
import Main from './components/main/main';
import  MainNavbar from './components/navbar/navbar';
import MainCarousel from './components/carousel/carousel';
import CardComponent from './components/card/card';
import {Routes, Route} from "react-router-dom";
import DetailModels from './components/card/details';
import SearchResult from './components/searchResult/searchResult';
import Login from './components/login/login';



function App() {
  const [data, setData]= useState("");

  useEffect(()=>{
    Test().then((res)=>{
      setData(res.message)
    })





  },[])





  return (
    <>

      <Routes>
        <Route path="/" element={<Main/>}/>
      </Routes>
      <Routes>
        <Route path="/details/:productId" element={<DetailModels/>}/>
      </Routes>
      <Routes>
        <Route path="/search/:searchId" element={<SearchResult/>}/>
      </Routes>
      <Routes>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
