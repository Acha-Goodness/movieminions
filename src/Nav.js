import React, {useState, useEffect } from "react";
import "./Nav.css";
import ToggleLogo from "./ToggleLogo";

const Nav = () => {
    const [show, handleShow ] = useState(false);
    const [ active, setActive ] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((previousLogo) => {
                return !previousLogo;
            })
        }, 10000)
        return () => clearInterval(interval)
    }, []);



    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        });
        // return () => {
        //     window.removeEventListener("scroll");
        // };
    },[]);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <ToggleLogo active={active}/>
        </div>
    )
}

export default Nav;