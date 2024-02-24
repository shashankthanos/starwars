import React, { useEffect, useState } from 'react';
import '../Style/Planets.css';
import { Link } from 'react-router-dom';

const Planets = () => {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        fetch(`https://swapi.dev/api/planets/?format=json`)
            .then(resp => resp.json())
            .then(data=>setPlanets(data.results))
            .catch(error => console.error('Error Fetching Planets:', error));
    }, []);


    return (
        <>
            <div className='planet-container'>
                {planets.map((data, index) => (
                    <div key={index} className='planet-card'>
                        <h2>{`Planet Name: ${data.name}`}</h2>
                        <h3>{`Rotation Period: ${data.rotation_period}`}</h3>
                        <h3>{`Orbital Period: ${data.orbital_period}`}</h3>
                        <h3>{`Diameter: ${data.diameter}`}</h3>
                        <h3>{`Climate: ${data.climate}`}</h3>
                        <h4>{`Terrain: ${data.terrain}`}</h4>
                        <h3>{`Population: ${data.population}`}</h3>
                        <button><Link to={`/residents/${index}`}>Residents</Link></button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Planets;
