import { ReactChild } from 'react';
import './HighlightCard.scss'

interface HighlightCardProps {
    title: string,
    statValue: string,
    statUnit:string,
    children?: ReactChild
}

const HighlightCard = (props: HighlightCardProps) => {
    return (
        <div className="HighlightCard">
            <p className="Title">{props.title}</p>
            <h2 className="Stat">{props.statValue} <span className="StatUnit">{props.statUnit}</span></h2>
            <div className="Children">
            {props.children}
            </div>
        </div>
    );
}

export default HighlightCard ;