import React from 'react'
import { RWebShare } from "react-web-share";
import Media from "./share.module.css"
import { FaWhatsappSquare,FaFacebookSquare} from "react-icons/fa";
import {GrShare} from "react-icons/gr"
import { Link } from 'react-router-dom';


const Share = () => {
  return (
    <div>
     {/*  <div>
        <Link to="https://web.whatsapp.com/"><FaWhatsappSquare/></Link>
        

      </div>

      <div>
      <Link to="https://www.facebook.com/"><FaFacebookSquare/></Link>
      </div> */}
    

    <div className={Media.social}>
    <RWebShare
      data={{
        text: "Copied Link",
        url: "https://github.com/",
        title: "Share Here",
      }}
      onClick={() => console.log("shared successfully!")}
    >
      <div ><GrShare id={Media.btn}/></div>
    </RWebShare>
    
  </div>
    </div>
  )
}

export default Share;