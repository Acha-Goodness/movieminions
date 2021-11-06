import React from "react";
import logo1 from "./img/logo1.png";
import logo2 from "./img/logo2.png"

const ToggleLogo = ({active}) => {
    return (
        <div>
         {active ? 
            ( <img src={logo1} alt="Logo1" className="nav_logo"/>) 
            : 
            (  <img src={logo2} alt="Logo2" className="nav_logo"/>)
        }
        </div>
    )
}

export default ToggleLogo