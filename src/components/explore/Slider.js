import React, { useState, useEffect } from 'react';
import sarangkot from "../collection/image/sarangkot.jpg";
import phewalake from "../collection/image/Phewalake.jpg";
import devisfall from "../collection/image/devisfall.jpg";
import culture from "../collection/image/culture.jpeg";
import adven from "../collection/image/adventure.jpeg"
// import { useNavigate } from "react-router-dom";
const Slider = () => {
  const images = [
    sarangkot,
    adven,
    phewalake,
    culture,
    devisfall
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage(prevImage => (prevImage + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);
//   const navigate = useNavigate();
// const handleaddsection=()=>{
//   navigate("/addplace");
// }
  return (
    <div>
      <div className='z-0 absolute inset-0 flex items-start mt-20 justify-end mr-8 h-24'>
        <button  className="bg-blue-500 text-white px-4 py-2 rounded"
        > <a href="http://192.168.74.56/php/ethoshackphp/SAFAR/php/addplace/addplace.php">Contribute</a></button>
      </div>
      <img className='w-full object-cover' src={images[currentImage]} alt="Slider Image" style={{height:'300px',width:'100%'}} />
    </div>
  );
};

export default Slider;
