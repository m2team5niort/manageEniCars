import Sidebar from '../../Components/Dashboard/Sidebar'
import Navbar from '../../Components/Dashboard/Navbar'

export default function DashboardBase() {

    return (
        <>
            <div className='flex flex-row'>
                <Sidebar />
                <Navbar />
            </div>
        </>
    )

}