import { useState } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { getProviders, getSession, signIn } from "next-auth/react"
import Toast from '../../Components/Common/Toast'

export default function SignUp({ providers }) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [toastState, setToastState] = useState(false)
    const [errorText, setErrorText] = useState('')

    
    const handleRequiredField = () => {
        
        // Verify if inputs not empty
        if(!name)
        {
            return true;
        }
        else if(!email)
        {
            return true;
        }
        else if(!password)
        {
            return true;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let image = '';
        let role = 'user'

        let data = {
            name,
            email,
        }

        //fetch('/api/mailer', {
        //method: 'POST',
        //headers: {
        //'Accept': 'application/json, text/plain, */*',
        //'Content-Type': 'application/json'
        //},
        //body: JSON.stringify(data)
        //})
        fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                name: name,
                password: password,
                image: image,
                role: role
            }),
        }).then((res) => {
            if (res.status === 200 || res.status === 201) {
                setSubmitted(true)
                setName('')
                setEmail('')
                Router.push('/')
            }
            else if (res.status === 422) {
                setToastState(true)
                setErrorText("Utilisateur déjà créé !")
            }
        });
    }

    return (
        <>
            {toastState && <Toast errorText={errorText} handleToastState={setToastState} />}
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt="Workflow"
                        />
                        <h2 className="mt-8 text-center text-3xl font-extrabold text-gray-900"> Création de mon compte </h2>
                        <p className="mt-6 text-center text-sm text-indigo-600">
                            Bienvenue sur votre page d'inscription
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-between space-y-6">
                        {Object.values(providers).map((provider) => (
                            <div key={provider.name}>
                                <button
                                    onClick={() => signIn(provider.id)}
                                    type="submit"
                                    className="group relative w-56 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    S'enregistrer avec {provider.name}
                                </button>
                            </div>
                        ))}
                        <span className="text-sm">Ou</span>
                    </div>
                    <div>
                        <form>
                            <div className="rounded-md shadow-sm space-y-6">
                                <div>
                                    <label htmlFor="email-address" className="sr-only">
                                        Email
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Adresse email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="Name" className="sr-only">
                                        Nom
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Nom"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="mot de passe"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Mot de passe"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <button
                                    type='submit'
                                    onClick={(e) => handleSubmit(e)}
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    S'enregistrer
                                </button>
                            </div>
                        </form >
                        <div className="mt-4 text-center">
                            <Link href="/auth/signin">
                                <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">
                                    Vous avez déjà un compte ?
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
    const providers = await getProviders()
    const { req, res } = context;

    return {
        props: {
            providers: providers,
        },
    }
}