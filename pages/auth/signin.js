import { getProviders, useSession, signIn, signOut } from "next-auth/react"
import { LockClosedIcon } from '@heroicons/react/solid'
import Link from 'next/link'

// Authentification function
export default function SignIn({ providers }) {
    const { session, loading } = useSession()
    if (session) {
        return (
            <>
                Signed in as {session.user.email} <br />
                <button onClick={() => signOut()}> Déconnexion </button>
            </>
        )
    }
    return (
        <>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div className="space-y-4">
                        <img
                            className="mx-auto h-12 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt="Workflow"
                        />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900"> Connectez-vous à votre compte </h2>
                        <p className="mt-2 text-center text-sm text-indigo-600">
                            Bienvenue sur votre page de connexion
                        </p>
                    </div>
                    {Object.values(providers).map((provider) => (
                        <div key={provider.name}>
                            <button
                                onClick={() => signIn(provider.id)}
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-indigo-600 border-indigo-600 hover:border-indigo-400 hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Sign in with {provider.name}
                            </button>
                        </div>
                    ))}
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm space-y-4">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="mail"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Adresse email"
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
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Se souvenir de moi
                                </label>
                            </div>
                            <div className="text-sm">
                                <a href="#" className="font-medium text-sm text-indigo-600 hover:text-indigo-500">
                                    Vous avez oublié votre mot de passe ?
                                </a>
                            </div>
                        </div>
                        <div className="text-center">
                            <button
                                onClick={() => signIn()}
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <LockClosedIcon className="h-5 w-5 text-indigo-300 group-hover:text-indigo-400" aria-hidden="true" />
                                </span>
                                Connexion
                            </button>
                        </div>
                        <div>
                            <Link href="/auth/signup">
                                <a className="font-medium text-sm text-indigo-600 hover:text-indigo-500 mt-40">
                                    Vous n'avez pas encore de compte ?
                                </a>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
    const providers = await getProviders()

    return {
        props: {
            providers: providers,
        },
    }
}