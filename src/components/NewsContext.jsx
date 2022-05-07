import React,{createContext, useEffect, useState} from "react";
import axios from '../axios'
import { Col } from "react-bootstrap";
export const NewsContext=createContext();
export const NewsContextProvider=(props)=>{
    const [data,setData]=useState();
    const apiKey="2c775f4e4c2a4c2590c3821a0b546db4";
useEffect(()=>{
    axios.get(`https://newsapi.org/v2/everything?q=sports&apiKey=${apiKey}&language=en`
    ).then(response=>setData(response.data))
    .catch(error=>console(error));
},[])
console.log(data)
    return(
        <NewsContext.Provider value={{data}}>
        {props.children}
        </NewsContext.Provider>
    )

}