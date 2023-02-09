import React, { useEffect } from 'react';
import './furnidokan.css';

const FurniDokan = () => {
  useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>console.log(data))
  },[])
  return (
    <div id='details'>
        <h1>Name</h1>
    </div>  
  );
};

export default FurniDokan;