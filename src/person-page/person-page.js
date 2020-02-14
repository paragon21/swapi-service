import React, {useState, useEffect} from 'react'
import ItemList from '../_common/item-list'
import SwapiService from '../_service'
import PersonDetails from './person-details'
import Loader from '../loader'
import './person-page.css'

const PersonPage = () => {
    
    const swapi = new SwapiService()
    const [state, setState] = useState({
        person: null,
        list: null,
        error: false
    }) 

    useEffect(
        () => {
            swapi.getAllPeople()
                .then(data => setState({...state, list: data}))
                .catch(err => setState({error: err}))
        }, []
    )

    const onPersonSelected = (personId) => {
        setState({...state, person: personId - 1})
    }

    const {list, person} = state 

    if (!list) {
        return ( 
            <Loader />
        )
    }

    return (
        <div className="row person-page">
            <ItemList list={state.list} clickHandler={onPersonSelected} />
            <PersonDetails person={list[person] || list[0]} />
        </div>
    )
}


export default PersonPage