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
                <div className="profile">
                    <div className="info">
                        {/*<p>Bonjour, <b>{user.firstName ? user.firstName : ''}</b></p>*/}
                    </div>
                    <div className="profile-photo">

                        <Link href={`/dashboard/profile/${username}`}>
                            <a>
                                
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
