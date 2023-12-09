import Preview from "./Preview";
import { useState, useEffect } from "react";
import image from '../../image/adventure.jpeg'


function Collection() {
    const [source, setSource] = useState([])
    useEffect(() => {
        fetch('https://dream-backers-crowdfunding-np.cyclic.cloud/api/safar-api')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setSource(data)
            })
    }, [])
    return (
        <div className=" h-full mt-0 ">
            <h1 className="text-3xl font-bold text-slate-700 mt-8 bg-slate-300 p-4 ">Collection of VR Video</h1>
            <div className="flex flex-col bg-slate-200">
                <div className="flex flex-row justify-around ">
                    {
                        source.slice(0, 3).map((product) => {

                            return (
                                <div className="collect m-8 rounded hover:bg-gradient-to-b from-sky-400 to-slate-200 items-center justify-center w-[350px] h-[370px] shadow-md pd-4 ">
                                    <h1 className="text-lg font-medium p-2" >{product.name}</h1>
                                    <Preview vidsource={product.video} key={product.id} id={product.cid} rid={product.rid} data={product} />
                                  
                                </div>
                            )

                        })
                    }
                </div>
                <div className="  flex flex-row justify-around">
                    {
                        source.slice(3, 6).map((product) => {

                            return (
                                <div className="collect  rounded hover:bg-gradient-to-b from-sky-400 to-slate-200 items-center justify-center m-4 w-[350px]  shadow-md  ">
                                          <h1 className="text-lg font-medium pd-2">{product.name}</h1>
                                    <Preview vidsource={product.video} key={product.id} id={product.cid} rid={product.rid} data={product}  />
                                   
                                </div>
                            )

                        })
                    }
                </div>

            </div>
        

        </div>
    )
}
export default Collection;