import React from 'react';
import "./responsive.css"

const Card = (props) => {
    
  return <div className='cardLayout ' style={{
    
      display:'inlineBlock',
      margin:' 30px auto 20px auto',
      boxShadow:'0 5px 10px 2px rgba(0,0,0,0.25) ',
      padding:'20px',
      borderRadius:'15px',
      textAlign:'center',
      

  }}>

{props.children}
  </div>;
};
export default Card;
