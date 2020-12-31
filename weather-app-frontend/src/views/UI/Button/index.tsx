import React from 'react'
import styles from './Button.module.css'

interface ButtonProps {
    rounded?: boolean,
    btnType: string
}

const Button: React.FC<ButtonProps> = props => {
    
    const classes = [styles.Button]
    classes.push(styles[props.btnType])
    
    if(props.rounded) classes.push(styles.Rounded)
    
    return (
        <button className={classes.join(' ')}>{props.children}</button>
    );
}

export default Button ;