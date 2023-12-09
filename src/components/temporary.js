import { useLocation } from "react-router-dom";
import Navbar from "../Navbar";
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
        <Navbar/>
      <h1 className="text-3xl font-bold text-center text-blue-500 mb-4 bg-slate-300 p-4 antialiased">
        {place.place_name}
      </h1>

      <div className="flex flex-row">
        <div className="w-25 ">
          <div className="flex flex-wrap">
            <img
              className="rounded my-4 mx-auto mt-2 bg-white"
              src={`${urlimg}${place.place_photo[0]}`}
              alt="/"
              style={{ height: "200px", width: "250px" }}
            />

            <img
              className="rounded my-4 mx-auto mt-2 bg-white"
              src={`${urlimg}${place.place_photo[1]}`}
              alt="/"
              style={{ height: "200px", width: "250px" }}
            />
            <img
              className="rounded my-4 mx-auto mt-2 bg-white"
              src={`${urlimg}${place.place_photo[2]}`}
              alt="/"
              style={{ height: "200px", width: "250px" }}
            />
          </div>

          <div className="w-75 flex flex-col">
          <p className="text-xl font-semibold ">Place Description:</p>
            <p className="h-96 overflow-y-scroll px-8 font-mono text-md tracking-tight">
                <span className="pl-8">{place.place_description.split(0,3)}</span>
            {place.place_description.split(3,)}
            </p>
         
            <div className="flex">
              <div className="w-1/3">
                <p className="text-lg font-semibold">Place Culture:</p>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  {place.place_culture}
                </p>
              </div>
              <div className="w-2/3">
                <p className="text-lg font-semibold">Region Weather:</p>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  <img
                    className="w-[100px] h-[100px] bg-blue-400 rounded-lg"
                    src={iconUrl}
                    alt=""
                  />
                  
                  <table>
                    <tr>
                      <th>Parameter</th>
                      <th>Value</th>
                    </tr>
                    <tr>
                      <td>Cloud</td>
                      <td>{deserializedData.clouds.all}</td>
                    </tr>
                    <tr>
                      <td>Temperature</td>
                      <td> {(Number(deserializedData.main.temp) - 273).toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td>Wind</td>
                      <td>{deserializedData.wind.speed}m/s</td>
                    </tr>
                    <tr>
                      <td>Visibility</td>
                      <td>{deserializedData.visibility}m</td>
                    </tr>
                  </table>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <p className="text-lg font-semibold">Category Name:</p>
        <p className="text-xl text-blue-500 mb-4">{place.category_name}</p>

        <p className="text-lg font-semibold">Best Time to Visit:</p>
        <p className="text-xl text-blue-500 mb-4">{place.place_besttime}</p>

        <p className="text-lg font-semibold">How to Reach:</p>
        <p className="text-xl text-blue-500 mb-4">{place.place_howtoreach}</p>
      </div>
    </div>
  );
}
export default Searchplace;
