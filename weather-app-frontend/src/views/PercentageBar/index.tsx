import React from 'react'
import './PercentageBar.scss'
interface PercentageBarProps {
    percentage: number
}

const PercentageBar = (props: PercentageBarProps) => {
    return (
        <div className="Container ">
            <div className="PercentageBar">
                <div className="Completed" style={{width: props.percentage + '%'}}></div>
            </div>
        </div>
    );
}

export default PercentageBar ;