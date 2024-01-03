import React from 'react';
import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { Icon } from '@iconify/react';
import { BsThreadsFill } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsLinkedin onClick={()=> window.open("https://www.linkedin.com/in/kjgreen86", "_blank")}/>
    </div>
    <div>
    <BsInstagram onClick={()=> window.open("https://www.instagram.com/burningvertex", "_blank")}/>
    </div>
    <div>
    <Icon icon="simple-icons:x" onClick={()=> window.open("https://www.x.com/burningvertex", "_blank")}/>
      {/*<BsX onClick={()=> window.open("https://www.twitter.com/burningvertex", "https://www.twitter.com/burningvertex")}/>*/}
    </div>
    <div>
    <BsThreadsFill onClick={()=> window.open("https://www.threads.net/burningvertex", "_blank")}/>
    </div>
    
    {/*<div>
    <Icon icon="simple-icons:fiverr" onClick={()=> window.open("https://www.fiverr.com/burningvertex", "_blank")}/>
</div>*/}
  </div>
);

export default SocialMedia;