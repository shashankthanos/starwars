import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Residents = () => {
    const [residentData, setResidentData] = useState([]);
    const { index } = useParams();

    useEffect(() => {
        const fetchResidentData = async () => {
            try {
                const response = await fetch(`https://swapi.dev/api/planets/?format=json`);
                const data = await response.json();
                const residentUrls = data.residents;
                const promises = residentUrls.map(url => fetch(url).then(response => response.json()));
                const residentData = await Promise.all(promises);
                setResidentData(residentData);
            } catch (error) {
                console.error('Error fetching resident data:', error);
            }
        };

        fetchResidentData();
    }, [index]);

    return (
        <div>
            {residentData.length > 0 ? (
                <div>
                    <h2>Resident Details:</h2>
                    {residentData.map((resident, index) => (
                        <div key={index}>
                            <p>Name: {resident.name}</p>
                            <p>Height: {resident.height}</p>
                            <p>Mass: {resident.mass}</p>
                            <p>Gender: {resident.gender}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading resident data...</p>
            )}
        </div>
    );
};

export default Residents;
