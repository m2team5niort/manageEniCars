import React, { useState, useEffect } from 'react';
import Modal from '../Common/Modal/Modal';
import { API } from 'aws-amplify';
import { listUsers, getUser } from '../../graphql/queries'
import { createUser as createUserMutation, deleteUser as deleteUserMutation, updateUser as updateUserMutation } from '../../graphql/mutations';
import MyDropdown from './Dropdown';


let initialFormState = { name: '', email: '', isAdmin: false};


export default function User({ user }) {

    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState(initialFormState);
    const [modal, setModal] = useState({
        isShow: false,
        type: '',
        page: 'user',
        object: {},
        listObjects: []
    });

    useEffect(() => {
        fetchUsers();
    }, []);

    async function fetchUsers() {
        await API.graphql({ query: listUsers }).then((res) => {
            res.data.listUsers.items.forEach(element => {
                API.graphql({query: getUser, variables: { id: element.id }}).then((res) => {
                    setUsers(users => [...users, res.data.getUser])
                })
            });
        });
    }

    async function createUser() {

        await API.graphql({ query: createUserMutation, variables: { input: formData } }).then((res) => {
            setUsers([...users, res.data.createUser]);
            setFormData(initialFormState);
            setModal({ ...modal, isShow: false });
        }).catch((err) => {
            console.log(err)
        });

    }

    async function updateUser({ id }) {
        formData.id = id

        console.log(formData)

        await API.graphql({ query: updateUserMutation, variables: { input: formData } }).then((res) => {
            let index = users.findIndex((obj => obj.id === id));
            users[index] = res.data.updateUser
            setFormData(initialFormState);
            setModal({ ...modal, isShow: false })
        }).catch((err) => {
            console.log(err)
        });

    }

    async function deleteUser({ id }) {
        const newUsersArray = users.filter(user => user.id !== id);
        setUsers(newUsersArray);
        await API.graphql({ query: deleteUserMutation, variables: { input: { id } } });
    }
    
    return (
        <>
            {modal.isShow &&
                <Modal modal={modal} setModal={setModal} updateObject={updateUser} createObject={createUser} setFormData={setFormData} formData={formData} />
            }
            <main  id="Content">
                <div className='px-8'>
                    <div className="shadow-md sm:rounded-lg bg-gray-50">
                        <div className='flex justify-between px-6 py-4'>
                            <h1 className='text-dark'> Liste des utilisateurs </h1>
                            <button onClick={() => setModal({ ...modal, isShow: true, type: 'add' })} className="bg-blue-500 text-white text-lg font-semi-bold mr-2 px-2.5 py-0.5 rounded "> Ajouter un utilisateur </button>
                        </div>    
                                <table className=" w-full text-sm text-left text-dark">
                                    <thead className="text-xs text-dark uppercase bg-gray-50">
                                        <tr>
                                            <th scope="col-1" className="px-6 py-3">
                                                #
                                            </th>
                                            <th scope="col-3" className="px-6 py-3">
                                                Nom
                                            </th>
                                            <th scope="col-4" className="px-6 py-3">
                                                Email
                                            </th>
                                            <th scope="col-4" className="px-6 py-3">
                                                Rôle
                                            </th>
                                            <th scope="col-1" className="px-6 py-3 text-center">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        users.map((user, index) => (
                                        <tr key={index} className="bg-gray-50 hover:text-gray-900 transition text-dark font-semibold hover:bg-gray-50">
                                            <th scope="row" className="px-6 py-4 whitespace-nowrap">
                                            {index + 1}
                                            </th>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {user.name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                            {user.email}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`${user.isAdmin ? 'bg-green-500' : 'bg-yellow-500'} text-white text-md font-semi-bold mr-2 px-2.5 py-0.5 rounded`}>{user.isAdmin ? 'Admin' : 'Utilisateur'}</span>
                                            </td>
                                            <td className="px-6 py-4 relative text-center">
                                            <MyDropdown object={user} deleteObject={deleteUser} modal={modal} setModal={setModal} listObjects={[]}/>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                    </div>
            </main>



        </>
    )
}