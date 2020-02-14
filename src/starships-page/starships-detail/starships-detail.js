import React from 'react'
import Loader from '../../loader'
import './starships-detail.css'

const StarshipsDetail = (props) => {
    const {name, model, manufacturer, starship_class} = props.item

    if (!props.item) return <Loader />

    return (
        <div className="starship-details">
            <img alt="starship-upic" className="starship-details__logo" src={`https://starwars-visualguide.com/assets/img/big-placeholder.jpg`} />
            <div className="starship-details__info">
                <div>Имя: {name} </div>
                <div>Модель: {model} </div>
                <div>Производитель: {manufacturer} </div>
                <div>Класс корабля: {starship_class} </div>
            </div>
        </div>
    )
}

export default StarshipsDetail