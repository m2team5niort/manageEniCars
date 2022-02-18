import { AppWrapper, useAppContext } from "../../context/AppContext";
import Navbar from "./Navbar";

export default function DashboardContent() {

    const user = useAppContext(AppWrapper)

    console.log(user)

    return (
        <div className="flex flex-col w-10/12">
            <Navbar />
            <div className="w-full min-h-custom-dashboard-height bg-base-1 overflow-y-auto h-0">
                <div className='p-8 space-y-12'>
                    <h1 className="text-3xl font-bold text-white">CONTENT DU DASHBOARD</h1>
                    <div className="flex flex-row justify-between">
                        <div className="w-6/12 bg-white h-60">Map</div>
                        <div className="w-3/12 bg-white h-60">Stat</div>
                    </div>
                </div>
            </div>
        </div>
    )

}