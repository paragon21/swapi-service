import React from 'react'
import Loader from '../../loader'
import './person-details.css'

const PersonDetails = (props) => {
    const {id, name, sex, birth_year, eye_color} = props.person
    if (!id) return  <Loader />
    return (
        <div className="person-details">
            <img alt="person-upic" className="person-details__logo" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
            <div className="person-details__info">
                <div>Имя: {name} </div>
                <div>Пол: {sex} </div>
                <div>Год рождения: {birth_year} </div>
                <div>Цвет глаз: {eye_color} </div>
            </div>
        </div>
    )
}

export default PersonDetails