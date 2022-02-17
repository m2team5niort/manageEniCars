import DashboardBase from '../Components/Dashboard/DashboardBase'
import DashboardContent from '../Components/Dashboard/DashboardContent'

export default function dashboard() {

    return (
        <>
            <div className='flex flex-col'>
                <DashboardBase />
                <DashboardContent />
            </div>
        </>
    )

}