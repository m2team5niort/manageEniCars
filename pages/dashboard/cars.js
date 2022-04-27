import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import {listCars} from '../../graphql/queries'
import { createCar as createCarMutation, deleteCar as deleteCarMutation } from '../../graphql/mutations';

const initialFormState = { name: '', description: '' }

export default function cars(){
  const [cars, setCars] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchCars();
  }, []);

  async function fetchCars() {
    const apiData = await API.graphql({ query: listCars });
    setCars(apiData.data.listCars.items);
  }

  async function createCar() {
    if (!formData.name || !formData.description) return;
    await API.graphql({ query: createCarMutation, variables: { input: formData } });
    setCars([ ...cars, formData ]);
    setFormData(initialFormState);
  }

  async function deleteCar({ id }) {
    const newCarsArray = cars.filter(car => car.id !== id);
    setCars(newCarsArray);
    await API.graphql({ query: deleteCarMutation, variables: { input: { id } }});
  }

  return (
    <div className="App bg-gray-200">
      <h1>My Cars App</h1>
      <input
        onChange={e => setFormData({ ...formData, 'name': e.target.value})}
        placeholder="Car name"
        value={formData.name}
      />
      <input
        onChange={e => setFormData({ ...formData, 'description': e.target.value})}
        placeholder="Car description"
        value={formData.description}
      />
      <input
        onChange={e => setFormData({ ...formData, 'modele': e.target.value})}
        placeholder="Car modele"
        value={formData.modele}
      />
      <input
        onChange={e => setFormData({ ...formData, 'places': e.target.value})}
        placeholder="Car places"
        value={formData.places}
      />
      <button onClick={createCar}>Create Car</button>
      <div style={{marginBottom: 30}}>
          <h2>Les voitures</h2>
        {
          cars.map(car => (
            <div className='bg-gray-200 p-12' key={car.id || car.name}>
              <h2>{car.name}</h2>
              <p>{car.description}</p>
              <p>{car.modele}</p>
              <p>{car.places}</p>
              <button onClick={() => deleteCar(car)}>Delete car</button>
            </div>
          ))
        }
      </div>
    </div>
  );
}