import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppIconf = ({ phone }) => {
  const handleClick = () => {
    window.open(`https://api.whatsapp.com/send?phone=${9468329470}`);
  };

  return (
    <div className='w-[4.5rem] h-[4.5rem] bg-darksalmon rounded-full items-end ' onClick={handleClick}>      
      <WhatsAppIcon  className='fill-white w-[3rem] h-[3rem] ml-3 mt-2'/>
    </div>
  
    
      
  );
};

export default WhatsAppIconf;