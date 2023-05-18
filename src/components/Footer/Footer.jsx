import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Link from "@iconscout/react-unicons/icons/uil-linkedin";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>shohanali720@gmail.com</span>
        <div className="f-icons">

          <a href="https://www.linkedin.com/in/shohan-shohag-910729217/"> <Link color="white" size={"3rem"} /> </a>

          <a href="https://www.facebook.com/shohanshohag720"> <Facebook color="white" size={"3rem"} /> </a>

          <a href="https://github.com/MdShohanAli"> <Gitub color="white" size={"3rem"} /> </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
