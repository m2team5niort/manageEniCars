import initFirebase from '../firebase/initFirebase'
import 'firebase/auth'
import { useEffect, useState } from 'react'
import UserService from "../service/UserService"
import Link from "next/link"
import router from 'next/router'

initFirebase()

export default function signup() {
    const [renderAuth, setRenderAuth] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassowrd] = useState('')

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setRenderAuth(true)
        }
    }, [])

    function loginWithGoogle() {
        UserService.signInWithGoogle().then(function (result) {
            if (result.user.isAnonymous === false) {
                router.push('/')
            }
        })
    }

    function registerWithEmailAndPassword() {
        UserService.registerWithEmailAndPassword(email, password).then(function (result) {
            if (result.code !== 'auth/email-already-in-use') {
                UserService.registerUserFirestore(result.user).then(function (result) {
                    router.push('/')
                })
            }
        })
    }

    return (
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
                    {renderAuth ? (
                        <>
                            <button
                                type="button"
                                className="w-full group relativ flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-indigo-600 border-indigo-600 hover:border-indigo-400 hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <span className="w-full text-sm" onClick={loginWithGoogle}>
                                    S'enregistrer avec Google
                                </span>
                            </button>
                            <span>ou</span>
                            <div className="w-full rounded-md shadow-sm space-y-6">
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
                                        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Adresse email"
                                        onChange={(e) => setEmail(e.target.value)}
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
                                        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Mot de passe"
                                        onChange={(e) => setPassowrd(e.target.value)}
                                    />
                                </div>
                            </div>

                            <button
                                type="button"
                                className="w-full group relativ flex justify-center py-2 px-4 text-sm font-medium rounded-md text-white focus:outline-none bg-indigo-600"
                            >
                                <span className="w-full text-sm" onClick={registerWithEmailAndPassword}>
                                    S'enregistrer
                                </span>
                            </button>
                        </>
                    ) : null}
                </div>
                <div className="flex justify-between">
                    <Link href="/signin">
                        <a className="font-medium text-sm text-indigo-600 hover:text-indigo-500">
                            Vous avez déjà un compte?
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="font-medium text-sm text-indigo-600 hover:text-indigo-500">
                            Retour à l'accueil
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
