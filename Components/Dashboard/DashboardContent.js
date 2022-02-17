import { AppWrapper, useAppContext } from "../../context/AppContext";

export default function DashboardContent() {

    const user = useAppContext(AppWrapper)

    console.log(user)

    return (
        <>
            <div className='flex ml-64 mt-2 w-full max-w-4xl'>
                <h1 className="text-3xl font-bold">CONTENT DU DASHBOARD</h1>
            </div>
        </>
    )

}