import React, {useContext} from "react";
import Deal1 from "./deals"
import Deal2 from "./deals2"
import { UserContext } from '../App';

const Dealx = () =>{
   const {state,dispatch} = useContext(UserContext);
   console.log(state);
   if (state){
    return(
        <Deal1/>
    )
   }
   else{
        return(
            <Deal2/>
        )
   }
    
}

export default Dealx;