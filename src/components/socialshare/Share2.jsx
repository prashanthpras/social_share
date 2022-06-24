import React from "react";
import { RWebShare } from "react-web-share";
import Media from "./share2.module.css"
import Share from "./Share";
import { ImGoogle2,ImCross } from "react-icons/im";
import { FaInstagram, FaTwitterSquare,FaGithubSquare,FaFacebookSquare,FaWhatsappSquare,FaShareAltSquare,} from "react-icons/fa";




const Share2 = ({setOpen}) => {
  return  (
    
   <div className={Media.main}>
  
     <div className={Media.mainContainer}>
     {/* <div><ImCross id={Share.cross} onClick={()=>setOpen(false)}/></div> */}
    
      <div id={Media.div1}>
      <a href="https://twitter.com/"><FaTwitterSquare id={Media.twitter} /></a>
     {/* <a href="https://twitter.com/"><img id={Media.twitter} src="https://wallpapercave.com/img/kwst.png" /></a> */}
        
      </div>

      <div id={Media.div2}>
        <a href="https://www.instagram.com"><FaInstagram id={Media.instagram} /></a>
       {/*  <a href="https://www.instagram.com/" ><img id={Media.instagram} src="https://wallpapercave.com/img/kwsi.png" /></a> */}
      </div>
      <div id={Media.div3}>
        <a href="https://www.facebook.com/"><FaFacebookSquare id={Media.facebook} /></a>
        {/* <a href="https://www.facebook.com/" ><img id={Media.facebook} src="https://wallpapercave.com/img/kwsf.png" /></a> */}
      </div>
      <div id={Media.div4}>
      <Share/>
      </div>
    {/*   <div>
        <FaGithubSquare id={Share.github} />
      </div>
      
      <div>
        <FaShareAltSquare id={Share.share} />
      </div> */}
       {/*  <div>
        <ImGoogle2 id={Share.google} />
      </div> */}
    {/*   <div>
        <Link to="https://web.whatsapp.com/" ><FaTwitterSquare id={Share.twitter} /></Link>
      </div> */}
     
    </div>
   </div>
  );
};

export default Share2;
