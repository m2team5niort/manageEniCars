// Imports Used

import Link from 'next/link'
import { SunIcon, MoonIcon } from '@heroicons/react/solid'
import { MenuIcon } from '@heroicons/react/outline'

// Navbar function
export default function Navbar({username}) {

    return (
        <>
            <div className="top-profile">
                <button id="menu-btn">
                    <MenuIcon className="w-5 h-5" />
                </button>
                <div className="theme-toggler">
                    <SunIcon className="w-1/2 h-full flex items-center justify-center active" />
                    <MoonIcon className="w-1/2 h-full flex items-center justify-center" />
                </div>
                <div className="profile">
                    <div className="info">
                        {/*<p>Bonjour, <b>{user.firstName ? user.firstName : ''}</b></p>*/}
                    </div>
                    <div className="profile-photo">

                        <Link href={`/dashboard/profile/${username}`}>
                            <a>
                                <img className="w-8 h-8 rounded-full" src={'https://i.pinimg.com/originals/83/46/bc/8346bcb80380e7f21ba1d7ab8b570d85.png'} alt="Profile image" />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
