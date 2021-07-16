import React from 'react'
import './Highlights.scss'
import HighlightCard from '../HighlightCard'
import PercentageBar from '../PercentageBar'
import WindIcon from '../WindIcon'
import { Highlights as HighlightsInterface } from '../../common/interfaces'

interface HighlightsProps {
    isMetric: boolean
    highlights: HighlightsInterface
}

const Highlights = (props: HighlightsProps) => {
    return (
        <div className="Highlights">
            <h2>Today's Highlights</h2>
            <HighlightCard 
                title="Wind Status" 
                statValue={props.isMetric? props.highlights.wind.metric.toString() : props.highlights.wind.imperial.toString()} 
                statUnit={props.isMetric? 'kmh' : 'mph'}
            >
                <WindIcon />
            </HighlightCard>
            <HighlightCard title="Humidity" statValue={props.highlights.humidity.toString()} statUnit="%">
                <PercentageBar percentage={props.highlights.humidity} />
            </HighlightCard>
            <HighlightCard 
                title="Visibility"
                statValue={props.isMetric? props.highlights.visibility.metric.toString() : props.highlights.visibility.imperial.toString()}  
                statUnit={props.isMetric? 'kilometers' : 'miles'} 
            />
            <HighlightCard 
                title="Air Pressure" 
                statValue={props.isMetric? props.highlights.airPressure.metric.toString() : props.highlights.airPressure.imperial.toString()} 
                statUnit={props.isMetric? 'mb' : 'inHg'} 
            />  
        </div>
    );
}

export default Highlights ;