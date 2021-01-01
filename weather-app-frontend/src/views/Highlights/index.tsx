import React from 'react'
import './Highlights.scss'
import HighlightCard from '../HighlightCard'
import PercentageBar from '../PercentageBar'
import WindIcon from '../WindIcon'

interface HighlightsProps {

}

const Highlights = (props: HighlightsProps) => {
    return (
        <div className="Highlights">
            <h2>Today's Highlights</h2>
            <HighlightCard title="Wind Status" statValue="7" statUnit="mph">
                <WindIcon />
            </HighlightCard>
            <HighlightCard title="Humidity"statValue="84" statUnit="%">
                <PercentageBar percentage={84} />
            </HighlightCard>
            <HighlightCard title="Visibility"statValue="6,4" statUnit="miles" />
            <HighlightCard title="Air Pressure" statValue="998" statUnit="mb" />  
        </div>
    );
}

export default Highlights ;