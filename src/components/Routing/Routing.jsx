import { Route, Routes } from "react-router";
import Home from "../Home/Home";
import CoinDetailsPage from "../../pages/CoinDetailsPage";


function Routing(){
    return (
        <Routes>
            <Route path='/' element = {<Home />} />
            <Route path='/details/:coinId' element = {<CoinDetailsPage />} />
          
        </Routes>
    )
}

export default Routing;
