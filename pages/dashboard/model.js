import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import {listModels} from '../../graphql/queries'
import { createModel as createModelMutation, deleteModel as deleteModelMutation } from '../../graphql/mutations';

const initialFormState = { name: '', description: '' }

export default function model(){
  const [Models, setModels] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchModels();
  }, []);

  async function fetchModels() {
    const apiData = await API.graphql({ query: listModels });
    setModels(apiData.data.listModels.items);
  }

  async function createModel() {
    if (!formData.name || !formData.description) return;
    await API.graphql({ query: createModelMutation, variables: { input: formData } });
    setModels([ ...Models, formData ]);
    setFormData(initialFormState);
  }

  async function deleteModel({ id }) {
    const newModelsArray = Models.filter(Model => Model.id !== id);
    setModels(newModelsArray);
    await API.graphql({ query: deleteModelMutation, variables: { input: { id } }});
  }

  return (
    <div className="App bg-gray-200">
      <h1>My Models App</h1>
      <input
        onChange={e => setFormData({ ...formData, 'name': e.target.value})}
        placeholder="Model name"
        value={formData.name}
      />
      <input
        onChange={e => setFormData({ ...formData, 'description': e.target.value})}
        placeholder="Model description"
        value={formData.description}
      />
      <input
        onChange={e => setFormData({ ...formData, 'image': e.target.value})}
        placeholder="Model image"
        value={formData.image}
      />
      <input
        onChange={e => setFormData({ ...formData, 'brand': e.target.value})}
        placeholder="Model brand"
        value={formData.brand}
      />
      <button onClick={createModel}>Create Model</button>
      <div style={{marginBottom: 30}}>
          <h2>Les voitures</h2>
        {
          Models.map(Model => (
            <div className='bg-gray-200 p-12' key={Model.id || Model.name}>
              <h2>{Model.name}</h2>
              <p>{Model.description}</p>
              <p>{Model.brand}</p>
              <p>{Model.image}</p>
              <button onClick={() => deleteModel(Model)}>Delete Model</button>
            </div>
          ))
        }
      </div>
    </div>
  );
}