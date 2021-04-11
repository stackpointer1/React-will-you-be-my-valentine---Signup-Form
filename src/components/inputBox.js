import React from "react";
const InputBox=(props)=>{
    return(
        <input
        data-testid={props.data}
        type={props.type}
        placeholder={props.placeholder}
        defaultValue=""
        name={props.name}
        onChange={props.onChange}
        />
    );
};
export default InputBox;