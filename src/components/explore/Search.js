import React, { useState, useEffect } from 'react';
// import { FaUser, FaBell } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const url='http://192.168.74.56/php/ethoshackphp/SAFAR/php/display';
const Search = () => {
  const [searchTerm, setSearchTerm] = useState([]);
  const [showPlaces, setShowPlaces] = useState(false);
//   const [placeList, setPlaceList] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState('');

  useEffect(() => {
    // Simulating API call to fetch the place list
    fetchPlaceList()
  }, []);

  const fetchPlaceList = async () => {
    try {
      // Make an API call to fetch the place list
      const response = await fetch(`${url}/getplace.php`);
      const data = await response.json();
      setSearchTerm(data)
      console.log(data);
      console.log(searchTerm);
    } catch (error) {
      console.error('Error fetching place list:', error);
      return [];
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const navigate = useNavigate();
  const handleShowPlaces = () => {
   console.log(selectedPlace);
   (searchTerm.map((place)=>{
    if(selectedPlace==place.place_name){
        navigate("/searchedplace", { state: place });
    }
}))
  };

  const handlePlaceSelect = (place) => {
    setSelectedPlace(place);
   
  };

//   const filteredPlaces = searchTerm.filter((place) =>
//     place.toLowerCase().includes(searchTerm.toLowerCase())
//   ).sort();

 
  return (
    <div className=" container z-0 absolute inset-0 flex items-center mt-16 justify-start flex-row mx-auto p-4 h-24 w-36">
     <select
            className="border border-yellow-300 rounded-md px-4 py-2 mb-4"
            value={selectedPlace}
            onChange={(e) => handlePlaceSelect(e.target.value)}
          >
            <option value="">Select a place</option>
            {searchTerm.map((place) => (
              
              <option key={place.id} value={place.place_name}>
              {place.place_name}
              </option>
            ))}
          </select>
      <button

        className="bg-blue-500 text-white px-4 py-2 mb-4 rounded"
        onClick={handleShowPlaces}
      >
        Explore
      </button>
      <div className='flex justify-between text-black  my-6'>
      {/* <i class="fa-solid fa-user"></i> */}
      {/* <i className="fa-solid fa-bell "></i> */}
      </div>
      {showPlaces && (
        <div>
         
          {selectedPlace && (
            <div>
              <h2>Selected Place: {selectedPlace}</h2>

              {/* Render additional details or perform actions based on the selected place */}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;