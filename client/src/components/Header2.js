import React from "react";
import {Link} from "react-router-dom"
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context";



function Header2({setCatSelected}) {

  const navigate = useNavigate()
  const {isLogged} = useContext(AppContext)

  const navRoute = (e) => {
    e.preventDefault();
    let name = e.target.name
    if(!isLogged){
      navigate("/login")
    }
    else{
      navigate(`/${name}`)
    }

  }


  return (
    <div className="header-2">
        <Link to="/">
          <button className="nav-buttons">translate</button>
        </Link>

          <button name="expressions" className="nav-buttons" onClick={(e) => navRoute(e)}>expressions</button>

       
         <button name="words" className="nav-buttons" onClick={(e) => navRoute(e)}>words</button>

        <button name="stars" className="nav-buttons" onClick={(e)=>{navRoute(e); setCatSelected(false)}}>stars</button>
     
    </div>
  )
}

export default Header2;
