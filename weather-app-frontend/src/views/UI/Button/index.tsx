import React from 'react'
import './Button.scss'

interface ButtonProps {
    rounded?: boolean,
    color: string,
    children: React.ReactChild
}

const Button = (props: ButtonProps) => {
    
    return (
        <button className={['Button', props.color, props.rounded? 'Rounded' : ''].join(' ')}>
            {props.children}
        </button>
    );
}

export default Button ;