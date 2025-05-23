import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../styles/WhyUs.css'
import {
  faHandHoldingDollar,
  faAward,
  faUserTie,
  faMedal,
  faBrain,
  faHeartCircleCheck,
  faBusinessTime,
  faClipboardCheck,
  faSeedling,
  faTruckFast,
  faGifts,
} from "@fortawesome/free-solid-svg-icons";

const WhyUsItem = ({ icon, title }) => {
  return (
    <div className="why-us-item">
      <FontAwesomeIcon icon={icon} className="icon" />
      <h3>{title}</h3>
    </div>
  );
};

export default WhyUsItem;
