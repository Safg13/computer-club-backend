import React from "react";
import classes from './DefaultInput.module.css'

const Input = (props) => {
    return (
        <input className={classes.default} {...props}>
            
        </input>
    )
}

export default Input;