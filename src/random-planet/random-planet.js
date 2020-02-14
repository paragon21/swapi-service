import React, {useState, useEffect} from 'react'
import './random-planet.css'
import SwapiService from '../_service'
import Loader from '../loader'

const RandomPlanet = () => {
  const [state, setState] = useState()
  
  useEffect(
      () => {
        const swapi = new SwapiService()         
        const id = Math.floor(Math.random() * 25 + 3);   
        swapi.getPlanet(id)
          .then(i => setState(i))
      }, []
  )

  if (!state) return <Loader />;

  const {id, name, population, rotationPeriod, diameter} = state;
  return (    
    <div className="random-planet">

    <img className="random-planet__img"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt="Planet view from space" />

    <div className="random-planet__text">
      <div className="random-planet__header">Планета: {name} </div>
      <hr />
      <div className="random-planet__population"> Население: {population} </div>
      <hr />
      <div className="random-planet__rotation"> Период оборота: {rotationPeriod} </div>
      <hr />
      <div className="random-planet__diameter"> Диаметр: {diameter} km </div>
      <hr />
    </div>
  </div>

  )
}

export default RandomPlanet