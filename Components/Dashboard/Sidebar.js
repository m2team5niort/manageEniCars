import { useState } from "react";

export default function Dashboard() {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <>
            {showSidebar ? (
                <button
                    className="flex text-4xl text-white items-center cursor-pointer fixed left-10 top-6 z-50"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    x
                </button>
            ) : (
                <svg
                    onClick={() => setShowSidebar(!showSidebar)}
                    className="fixed z-30 flex items-center cursor-pointer left-10 top-6"
                    fill="#2563EB"
                    viewBox="0 0 100 80"
                    width="40"
                    height="40"
                >
                    <rect width="100" height="10"></rect>
                    <rect y="30" width="100" height="10"></rect>
                    <rect y="60" width="100" height="10"></rect>
                </svg>
            )}

            <div
                className={`top-0 left-0 w-[35vw] bg-blue-600 p-10 pl-20 text-white fixed h-full z-40  ease-in-out duration-300 ${showSidebar ? "translate-x-0 " : "translate-x-full"
                    }`}
            >
                <ul className="space-y-6">
                    <li><a href='/dashboard/user' className=" py-2 px-4 text-sm font-medium rounded-md text-white focus:outline-none bg-indigo-600">Gestion utilisateur</a></li>
                    <li><a href='/dashboard/reservation' className=" py-2 px-4 text-sm font-medium rounded-md text-white focus:outline-none bg-indigo-600">Réservation</a></li>
                    <li><a href='/dashboard/vehicle' className=" py-2 px-4 text-sm font-medium rounded-md text-white focus:outline-none bg-indigo-600">Véhicule</a></li>
                    <li><a href='/dashboard/profile' className=" py-2 px-4 text-sm font-medium rounded-md text-white focus:outline-none bg-indigo-600">Profile</a></li>
                </ul>
            </div>
        </>
    );
};
