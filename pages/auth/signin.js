import { getCsrfToken, getProviders, getSession, signIn } from "next-auth/react"

export default function SignIn({ session, providers, csrfToken }) {

    return (
        <>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt="Workflow"
                        />
                        <h2 className="mt-8 text-center text-3xl font-extrabold text-gray-900"> Création de mon compte </h2>
                        <p className="mt-6 text-center text-sm text-gray-600">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Bienvenue sur votre page d'inscription
                            </a>
                        </p>
                    </div>
                    <form className="mt-8 space-y-12" action="#" method="POST">
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
                        <div className="flex flex-col items-center justify-between space-y-4">
                            {Object.values(providers).map((provider) => (
                                <div key={provider.name}>
                                    <button
                                        onClick={() => signIn(provider.id)}
                                        type="submit"
                                        className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Sign in with {provider.name}
                                    </button>
                                </div>
                            ))}
                            <div>
                                <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">
                                    Vous avez déjà un compte ?
                                </a>
                            </div>
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
    const { req, res } = context;
    const session = await getSession({ req });
    const csrfToken = await getCsrfToken({ req })
    if (session && res && session.accessToken) {
        res.writeHead(302, {
            Location: "/",
        });
        res.end()
        return;
    }
    return {
        props: {
            session: session,
            providers: providers,
            csrfToken: csrfToken
        },
    }
}