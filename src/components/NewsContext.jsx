import React,{createContext, useEffect, useState} from "react";
import axios from '../axios'
import { Col } from "react-bootstrap";
export const NewsContext=createContext();
export const NewsContextProvider=(props)=>{
    const [data,setData]=useState();
    const apiKey="d1c18beac50342af94b68b463755ef3f";
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