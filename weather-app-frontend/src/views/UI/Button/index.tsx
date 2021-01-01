import React from 'react'
import './Button.scss'

interface ButtonProps {
    rounded?: boolean,
    color: string,
    children: React.ReactChild
    active?: boolean
}

const Button = (props: ButtonProps) => {
    
    return (
        <button  className={['Button', props.color, props.rounded? 'Rounded' : '', props.active? 'Active' : ''].join(' ')}>
            {props.children}
        </button>
    );
}

export default Button ;