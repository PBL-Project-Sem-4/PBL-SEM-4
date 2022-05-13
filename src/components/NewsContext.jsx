import React,{createContext, useEffect, useState} from "react";
import axios from '../axios'
import { Col } from "react-bootstrap";
export const NewsContext=createContext();
export const NewsContextProvider=(props)=>{
    const [data,setData]=useState();
    const apiKey="d1c18beac50342af94b68b463755ef3f";
    // const apiKey="4393d8addcc1471ea48003431e0de3c4";
useEffect(()=>{
    axios.get(`https://newsapi.org/v2/everything?q=sports&apiKey=${apiKey}&language=en`
    ).then(response=>setData(response.data))
    .catch(error=>console.log(error));
},[])
console.log(data)
    return(
        <NewsContext.Provider value={{data}}>
        {props.children}
        </NewsContext.Provider>
    )

}