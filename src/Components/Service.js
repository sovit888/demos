import React from 'react'
import {servicesList} from "./servicesList"


const Service = () => {
    return (
        <div className="services">
            <div className='content'>
 <h1>Our Services</h1>
 <div className="services-list">
  {servicesList.map((value,index)=>{
      return <div className="services-cards" key={index}>
          <h1>{value.title}</h1>
          <img src={value.image} alt="something.."/>
          <p>{value.descriptions}</p>
      </div>
  })}
 </div>
            </div>
        </div>
    )
}

export default Service
