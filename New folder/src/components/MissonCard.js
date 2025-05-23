import React from "react";
import '../styles/MissonCard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MissonCard({color, title, description, icon ,fcolor}){

    return(
        <div className="missonCard" style={{ backgroundColor: color,margin: "10px", borderRadius:"10px", height:"20vh", width:"26vh", padding:"10px",color:fcolor}}>
            <div className="misson-icon-box">
            <FontAwesomeIcon className="misson-icon" icon={icon} size="2x" style={{ marginBottom: "0px" }} />
            </div>
            <div className="misson-title">
                <h5>{title}</h5>
            </div>
            <div className="misson-para">
                <p>{description}</p>
            </div>
        </div>
    );
}
export default MissonCard;