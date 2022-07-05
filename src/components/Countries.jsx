import axios from 'axios'
import React, { useEffect, useState } from 'react';
import Country from './Country';

const Countries = () => {
    const[countries,setCountries]=useState([])

    useEffect(()=>{
        axios.get("https://restcountries.com/v2/all")
        .then(res=>{
            setCountries(res.data)
            console.log(res.data);
        })
        .catch(error=>console.log(error))


    },[])
  return (
    <div>
        <h2>Travelling around the world</h2>
        {
            countries.map(country=><Country
            key={country.alpha2Code}
            country={country}
            
            
            >

            </Country>)
        }
        
      
    </div>
  )
}

export default Countries
