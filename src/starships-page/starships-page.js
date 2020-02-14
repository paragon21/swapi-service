import React, {useState, useEffect} from 'react'
import SwapiService from '../_service'
import Loader from '../loader'
import ItemList from '../_common/item-list'
import StarshipsDetail from './starships-detail'
import './starships-page.css'

const StarshipsPage = () => {
    const swapi = new SwapiService()
    const [state, setState] = useState({
        list: null,
        item: null,
        error: false
    });

    useEffect(
        () => {
            swapi.getAllStarships()
                .then(data => setState({...state, list: data}))
                .catch(err => setState({error: !state.error}))            
        }, [] 
    )

    const onItemSelected = (itemId) => {
        setState({...state, item: itemId})
    }

    const {list, item} = state

    if (!list) {
        return <Loader />
    } else {
        return (
            <div className="row starship-page">
                <ItemList list={state.list} clickHandler={onItemSelected} />
                <StarshipsDetail item={list[item] || list[0]} />
            </div>
        )
    }  
}

export default StarshipsPage