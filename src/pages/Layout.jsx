import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";


function MainLayout(){
    return (
        <>
            {/* this is the shared ui we want to across the page */}
            <Navbar/>
            {/* the actual page which will be rendered along with the navabar
            the route-router-dom  will give you the outlet */}
            {/* if page 1 is shown it will be rendered here if page 2 shown it will be rendered here */}
            <Outlet/> 

        </>
    )
}


export default MainLayout;
