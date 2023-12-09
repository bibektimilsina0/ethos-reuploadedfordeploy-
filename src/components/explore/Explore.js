import Navbar from "../Navbar";
import Filter from "./Filter";
import Option from './Option'
import Search from "./Search";
import Slider from "./Slider";

function Explore(){


    return(
        <div>
            <Navbar/>
            <div>
                <Slider/>
                <Search/>
              
                <Option/>
                {/* <Filter/> */}
            </div>
        </div>
    )
}
export default Explore;