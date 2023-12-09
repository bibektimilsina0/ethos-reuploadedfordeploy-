import { useLocation } from "react-router-dom";
import VrApp from "../VrApp";
import Navbar from "../Navbar";

function FullView() {
  const location = useLocation();
  const data = location.state;

  return (
    <div className="text-center  ">
      <div>
        <Navbar className="shadow:none"/>
      </div>
      <div className="bg-white py-4 mb-2 bg-grey-200 mt-2" >
        <h1 className="text-3xl font-bold text-blue-600 justify-left antialiased  ">{data.name}</h1>
      </div>
      <div className="bg-white py-4 mb-4">
        <VrApp videosrc={data.video} />
      </div>
      <div className="flex bg-white mb-4">
        <div className="flex-1 p-4 hover:shadow-lg hover:bg-slate-200">
          <h4 className="text-lg font-bold mb-2">Description</h4>
          <p>{data.desc}</p>
        </div>
        <div className="flex-1 p-4 hover:shadow-lg hover:bg-slate-200">
          <h4 className="text-lg font-bold mb-2">Image:</h4>
          <img
            src={data.image}
            alt=""
            className="h-48 w-48 object-cover"
          />
        </div>
      </div>
      <div className="bg-white py-4 mb-4 hover:shadow-lg hover:bg-slate-200">
        <h4 className="text-lg font-bold">Culture:</h4>
        <p>{data.culture}</p>
      </div>
      <div className="bg-white py-4 mb-4 flex hover:shadow-lg ">
        {
            data.places.map((place)=>{
                return(
                    <div className="border m-2 rounded-md  hover:bg-slate-200">
                        <h4 className="text-lg font-bold">{place.name}</h4>
                        <img src={place.image} alt="/" />
                        <p>{place.description}</p>
                       
                    </div>
                )
            })
        }
      </div>
    </div>
  );
}

export default FullView;
