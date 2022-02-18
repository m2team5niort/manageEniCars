// Imports Based
import { AppWrapper, useAppContext } from "../../context/AppContext";
import Navbar from "./Navbar";

// DashboardContent function
export default function DashboardContent() {

    // User const
    const user = useAppContext(AppWrapper)

    console.log(user)

    return (
        // DashBoardContent
        <div className="flex flex-col w-10/12">
            
            {/* NavBar Section */}
            <Navbar />
            <div className="w-full min-h-custom-dashboard-height bg-base-1 overflow-y-auto h-0">
                <div className='p-8 space-y-12'>
                    <h1 className="text-3xl font-bold text-white">DASHBOARD - <span className="font-normal text-3xl">Suivi en temps réel des voiture</span></h1>
                    <div className="flex flex-col space-y-20">
                        <div className="flex flex-row justify-between">
                            <div className="w-8/12 bg-base-2 h-96 rounded-md"></div>
                            <div className="w-3/12 h-96 bg-base-2 rounded-md px-12"></div>
                        </div>
                        <div className="flex flex-row justify-between space-x-12">
                            <div className="w-4/12 bg-base-2 h-48 rounded-md shadow-lg"></div>
                            <div className="w-4/12 bg-base-2 h-48 rounded-md shadow-lg"></div>
                            <div className="w-4/12 bg-base-2 h-48 rounded-md shadow-lg"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )

}