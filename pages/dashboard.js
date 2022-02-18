import Sidebar from '../Components/Dashboard/Sidebar'
import DashboardContent from '../Components/Dashboard/DashboardContent'

export default function dashboard() {

    return (
        <>
            <div className='flex flex-row'>
                <Sidebar />
                <DashboardContent />
            </div>
        </>
    )

}