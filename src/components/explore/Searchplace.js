import { useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import moment from 'moment';
function Searchplace() {

  const location = useLocation();
  const place = location.state;
  const urlimg = "http://192.168.74.56/php/ethoshackphp/SAFAR/php/uploads/";

  const jsonData = place.region_weather;
  const deserializedData = JSON.parse(jsonData);
  // const iconUrl = `http://openweathermap.org/img/w/${deserializedData.weather[0].icon}.png`;
  const iconUrl = `http://openweathermap.org/img/wn/${deserializedData.weather[0].icon}.png`;

  console.log(deserializedData);

  return (
    <div className="container mx-auto  ">
      <Navbar />
      <h1 className="text-3xl font-bold text-center text-blue-500 mb-4 bg-slate-300 p-4 antialiased">
        {place.place_name}
      </h1>

      <div className="flex flex-col">
        <div className="flex flex-row w-full mb-20">
          <div className="w-[50%] object-contain">
            <img
              className="rounded mb-4 mx-auto mt-2 bg-white mt-8"
              src={`${urlimg}${place.place_photo[1]}`}
              alt="/"
              style={{ height: "350px", width: "450px" }}
            />
          </div>
          <div className="  text-3xl">
          <div className="border-2  bg-slate-200 p-4  hover:bg-slate-400 shadow-lg rounded-lg">
            <p className="text-3xl text-gray-600 mb-2">Temperature in {place.place_name}:</p>
            <p className="text-4xl font-semibold"> {(Number(deserializedData.main.temp) - 273).toFixed(2)}°C</p>
           
              <img src={iconUrl}
                alt="Weather Icon"
                className="w-20 h-20 mx-auto mt-4 animate-bounce bg-blue-400 rounded-lg"
              />
            
            <p className="text-gray-600 mt-4">Cloud: {deserializedData.clouds.all}</p>
            <p className="text-gray-600">Visibility:{deserializedData.visibility}meters</p>
            <p className="text-gray-600">Humidity: {deserializedData.humidity}%</p>
            <p className="text-gray-600">Wind: {deserializedData.wind.speed}m/s</p>
            <p className="text-gray-600 mt-4">
              {/* {moment().format('dddd, MMMM Do YYYY')} */}
            </p>
          </div>
         
          </div>
          </div>
          




        <div className="flex flex-row w-full mb-20">
        <div className="flex flex-col w-[50%] p-16" >
            <p className="text-3xl font-semibold ">Place Culture:</p>
            <p className="h-96  overflow-y-scroll px-[8%] font-mono text-md tracking-tight text-justify">
              <span className="pl-8 text-justify">
                {place.place_culture.split(0, 3)}
              </span>
              {place.place_culture.split(3)}
            </p>
          </div>
          <div className="w-[50%] pt-8  ">
            <img
              className="rounded my-8 mx-auto mt-2 bg-white w-96 items-center justify-center " 
              src={`${urlimg}${place.place_photo[1]}`}
              alt="/"
              style={{ height: "350px", width: "450px" }}
            />
          </div>
          
        </div>







        <div className="flex flex-row w-full items-center justify-items-center w-[50%]">
          <div className="w-[50%] object-contain">
            <img
              className="rounded my-4 mx-auto mt-2 bg-white w-96"
              src={`${urlimg}${place.place_photo[2]}`}
              alt="/"
              st
              yle={{ height: "350px", width: "450px" }}
            />
          </div>
          <div className="flex flex-col w-[50%]">
            <p className="text-xl font-semibold ">Place Description:</p>
            <p className="h-96  overflow-y-scroll px-[8%] font-mono text-md tracking-tight text-justify">
              <span className="pl-8 text-justify">
                {place.place_description.split(0, 3)}
              </span>
              {place.place_description.split(3)}
            </p>
          </div>
        </div>


        





      </div>

     
      <div className="">
        <div className="hover:shadow-lg hover:bg-slate-100">
        <p className="text-3xl font-semibold">Category Name:</p>
        <p className="text-xl  mb-4 ml-12 p-12">{place.category_name}</p>
        </div>
        <p className="text-3xl font-semibold">Best Time to Visit:</p>
        <p className="text-xl  mb-4 ml-12 p-12">{place.place_besttime}</p>

        <p className="text-3xl font-semibold">How to Reach:</p>
        <p className="text-xl mb-4 ml-12 p-12" ml-8>{place.place_howtoreach}</p>
      </div>
    </div>
  );
}
export default Searchplace;
