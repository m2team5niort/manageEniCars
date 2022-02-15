export default function Content({ user }) {

    return (
        <div className="ml-80">
            {user &&
                <>
                    <button onClick={() => signOut()} className="block px-3 py-2 rounded-md text-base font-medium w-44 bg-blue-700 text-white hover:bg-blue-900 text-center">Se déconnecter</button>
                    <h1>Bienvenue {user.name}</h1>
                </>
            }
        </div>
    );
};
