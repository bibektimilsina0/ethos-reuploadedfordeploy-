
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const url='http://192.168.74.56/php/ethoshackphp/SAFAR/php/display';
const urlimg='http://192.168.74.56/php/ethoshackphp/SAFAR/php/uploads/';
const Filter = ({data}) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [result ,setResult]=useState(data);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${url}/getcategory.php`);
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;

    setSelectedCategory(selectedValue);
    sendPostRequest(selectedValue);
   const display=document.getElementById('option');
   if(selectedValue){
    display.innerHTML=null;

   }
    
  };

  const sendPostRequest = async (categoryId) => {
    console.log(categoryId);
    
      const response = await axios.get(`${url}/filtercategory.php?filtercategory_id=${categoryId}`);
      console.log(response.data);
      setResult(response.data)
      // Handle the response data here
   
  };
  const navigate = useNavigate();
  const navg=(singleplace)=>{
    navigate("/searchedplace", { state: singleplace });
  }

  return (
    <div className='static flex justify-end' id='filter'>
        <div className='absolute top-50%  right-2%'>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>{category.category_name}</option>
        ))}
      </select>
      </div>
      <div className='py-[20px] md:grid grid-cols-3 gap-6  py-5   '>
      {
            result.map((singleplace) => {
              return (
                <div className='w-96 shadow-xl flex flex-col h-[420px] bg-gray-200 rounded my-2 hover:scale-105 duration-500  ' key={singleplace.place_id}>
                  <img className='rounded mx-auto mt-2 bg-white object-fit' src={`${urlimg}${singleplace.place_photo[0]}`} alt='/' style={{ height: '200px', width: '250px' }} />
                  <div className='flex justify-center mt-4 mx-4 '>
                  <h2 className='text-3xl font-semibold text-gray-950'>{singleplace.place_name},</h2>
                  <p className='align-center text-3xl'>{singleplace.region_name}.</p>
                  </div>
                  <div  className='text-center mt-2 '>
                  <p>{singleplace.category_name}</p>
                  </div>
                  <div className='flex justify-around'>
                  <div  className='py-4 mt-2 mx-4 '>
                  <i class="fa-solid fa-heart" style={{color: '#c90d29'}}></i><span>{singleplace.place_like}Like</span>
                  </div>
                  <div  className='py-4 mt-2 mx-4 '>
                  <i class="fa-regular fa-star" style={{color: '#224e9b'}}></i><span>{singleplace.place_rating}Rating</span>
                  </div>
                  
                  </div>
                  <div className='text-center font-medium '>
                   
                    <button className='bg-[#439fef] rounded-md font-medium py-1 px-2 my-2 mx-auto w-24' onClick={()=>navg(singleplace)}>Explore</button>
                  </div>
                </div>
              )
            })
          }{
      
       }
      </div>
    </div>
  );
};

export default Filter;