import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Card from "../components/Card";


function List() {
    const [movieData, setMovieData] = useState([]);
    const [isLoading, setLoading] = useState(true);
   
    useEffect( ()=>{
        async function getData() {
            const data = await fetch("../../assets/data.json");
            const mData = await data.json();
            setMovieData(mData);
            setLoading(false);
        };
        getData();
     }, []);
    
    const getFullList = (data) => {
        const result = data.map(movie => <div className='col-sm-2'><Card key={ movie.id } movie={ movie } /></div>);
        return (
            <div className="row">{result}</div>
        )
    }
    return (
        <div>{ isLoading ?   "Loading ..." : getFullList(movieData) }</div>
    )
}

export default List;