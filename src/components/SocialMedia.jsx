import React from 'react';
import { BsLinkedin, BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { Icon } from '@iconify/react';

const SocialMedia = () => (
  <div className="app__social">
   <div>
      <BsLinkedin onClick={()=> window.open("https://www.linkedin.com/in/kjgreen86", "_blank")}/>
    </div>
    <div>
      <BsTwitter onClick={()=> window.open("https://www.twitter.com/burningvertex", "https://www.twitter.com/burningvertex")}/>
    </div>
    <div>
      <BsInstagram />
    </div>
    {/*<div>
    <Icon icon="simple-icons:fiverr" onClick={()=> window.open("https://www.fiverr.com/burningvertex", "_blank")}/>
</div>*/}
  </div>
);

export default SocialMedia;