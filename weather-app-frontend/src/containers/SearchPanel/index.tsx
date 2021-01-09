import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from '../../views/UI/Button'
import './SearchPanel.scss'
import axios from '../../common/axios'
import { setLocation } from '../../store/actions'

interface SearchPanelProps {
    show: boolean
    backClicked: React.MouseEventHandler<HTMLButtonElement>,
    confirmSearch: Function
}


interface Location {
    type: string,
    key: string,
    locationName: string,
    country: {
        id: string,
        name: string
    },
    administrativeArea: {
        id: string,
        name: string
    }
}

const SearchPanel = (props: SearchPanelProps) => {

    const inputRef = useRef<HTMLInputElement>(null) as React.MutableRefObject<HTMLInputElement>
    const [filter, setFilter] = useState('')
    const [locations, setLocations] = useState<Location[]>([]) 
    const dispatch = useDispatch()
    
    useEffect(() => {
        const timer = setTimeout(() => {
            if(filter === inputRef.current.value && filter.length > 0){
                axios.get(`location/autocomplete?query=${filter}`)
                .then(location => setLocations(location.data))
                .catch()
            }
        }, 500)

        return () => {
            clearTimeout(timer)
        }
    },[inputRef, filter])

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value
        setFilter(query)
    }        

    const clickFilterHandler = (index: number) => {
        dispatch(setLocation(locations[index]))
        props.confirmSearch()
    }

    let filteredList = null
    if(locations.length > 0) {
        filteredList = (<div className="FilteredList">
                {locations.map((l, index) => {
                    const locationText = l.locationName + ', ' + l.administrativeArea.id + ', ' + l.country.id
                    return <div key={index} onClick={() => clickFilterHandler(index)} className="FilteredElement"> {locationText} </div>
                })}
            </div>)
    }

    return (
        <div className={['SearchPanel', props.show?'Opened' : 'Closed'].join(' ')} >
            <input ref={inputRef} onChange={event => inputChangeHandler(event)} type="combo"/>
            {filteredList}
            <Button clicked={props.backClicked} color="Gray">Back</Button>
        </div>
    );
}

export default SearchPanel ;