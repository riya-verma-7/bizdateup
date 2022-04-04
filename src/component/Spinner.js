import React from 'react'
import spinner from './spinner.gif'


const Spinner = () => <>
<div className="d-flex align-items-center" style={{width:'100vw',height:'100vh',backgroundColor:'white',zIndex:'9999',position:'fixed',top:'0',left:'0'}} >

<img src={spinner} alt="Loading..." style={{ display:'block',margin:'auto' }}/>
</div>
</>


  

export default Spinner ; 
