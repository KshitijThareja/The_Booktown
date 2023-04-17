import React from 'react';
import {IoLogoWhatsapp} from "react-icons"
const WhatsAppIcon = ({ phone }) => {
  const handleClick = () => {
    window.open(`https://api.whatsapp.com/send?phone=${9468329470}`);
  };

  return (
    <button onClick={handleClick} className='bg-black'>
      <img 
      className="rounded-2xl w-[2.9rem] align-self-center h-[2.9rem] bg-black"
      src="/whatsapp-icon.png" 
      alt="WhatsApp Icon" 
      />
    </button>
  );
};

export default WhatsAppIcon;