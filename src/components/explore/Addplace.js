import { useLocation } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';

const Addplace = () => {
    const location = useLocation();
  const [regionId, setRegionId] = useState('');
  const [placeName, setPlaceName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://192.168.74.56/php/ethoshackphp/SAFAR/php/addplace/addplace.php', {
        params: {
          region_id: regionId,
          place_name: placeName,
          // Add other form field values as needed
        },
        withCredentials: true, // Include cookies in the request
      });

      const data = response.data;
      console.log(data);

      if (data.status === 'success') {
        // Place added successfully
        console.log('Place added successfully');
      } else {
        // Handle error
        console.error('Failed to add place:', data.message);
      }
    } catch (error) {
      // Handle network or server error
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add Place</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="regionId">Region ID</label>
        <input type="text" id="regionId" value={regionId} onChange={(e) => setRegionId(e.target.value)} required />

        <label htmlFor="placeName">Place Name</label>
        <input type="text" id="placeName" value={placeName} onChange={(e) => setPlaceName(e.target.value)} required />

        <button type="submit">Add Place</button>
      </form>
    </div>
  );
};

export default Addplace;
