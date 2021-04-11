import React from "react";
const selectInput=(props)=>{
    <>
   <select
   data-testid={props.data}
   name={props.name}
   onChange={props.onChange}
   >
       <option>Male</option>
       <option>Female</option>
       <option>others</option>
   </select>
    </>

}
export default selectInput;