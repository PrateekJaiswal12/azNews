import React from 'react'
import "./NavigationAzNews.css"
import SideBar from "./SideBar"

const NavigationAznews = ({setCategory}) => {
  return (
    <div className='nav'>
      <div className='icon'><SideBar setCategory ={setCategory}/></div>
        
      <img 
        style={{cursor: "pointer"}}
        src='/logo.png' 
        alt='Logo' 
        height="90%" 
      />

    </div>
  )
}

export default NavigationAznews;

