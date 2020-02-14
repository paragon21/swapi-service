import React from 'react'
import Loader from '../../loader'
import './item-list.css'

const ItemList = (props) => {
    const {clickHandler, list} = props

    if (!list) return <Loader />
    const items = list.map(each => {
        return (
            <li onClick={() => clickHandler(each.id)} 
                key={each.id} 
                className="item-list__name">
            {each.name}
            </li>
        )
    })
    return (
        <div className="item-list">
          {items}
        </div>
    )
}

export default ItemList