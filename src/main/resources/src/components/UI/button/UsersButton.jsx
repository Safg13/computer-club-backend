import React from "react";
import classes from './UsersButton.module.css'

export const UsersButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.UsersButton}>
            {children}
        </button>
    )
}

export const UsersDeleteButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.UsersDeleteButton}>
            {children}
        </button>
    )
}
