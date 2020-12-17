import React from 'react'
import {footerList} from "./footerList"

const Footer = () => {
    return (
        <div className="footer"> 
            <div className="content">
{footerList.map((value,index)=>{
    return <div key={index} className="footer-list">
        <h3>{value.title}</h3>
        <ul className="footer-details">
        {value.lists.map((list,indexing)=>{
            return <li key={indexing}>{list}</li>
        })}
        </ul>
    </div>
})}
            </div>
            <div className="footer-bottom">
            <p>CopyRights-2020 <span className="small-text">All Rights Reserved</span></p>
            </div>
        </div>
    )
}

export default Footer
