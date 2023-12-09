import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'
import FullView from "./components/collection/Fullview";
import Explore from "./components/explore/Explore";
import Searchplace from "./components/explore/Searchplace";
import Addplace from './components/explore/Addplace'
import Login from "./components/explore/Login";
function Routedefine(){
return(
    <BrowserRouter >
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path='/fullview'element={<FullView/>}/>
      <Route path='/explore'element={<Explore/>}/>
      <Route path='/searchedplace'element={<Searchplace/>}/>
      <Route path='/addplace'element={<Addplace/>}/>
      <Route path='/login'element={<Login/>}/>
    </Routes>
  </BrowserRouter>
)
}

export default Routedefine;