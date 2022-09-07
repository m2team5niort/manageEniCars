export default function BadgeStateTravel({state}){

    const renderButton = (state) => {
        let result;
        switch(state){
            case 'En attente':
                result = 'bg-yellow-400'
                break;
            case 'Validé':
                result = 'bg-green-500'
                break;
            case 'Refusé':
                result = 'bg-red-500'
                break;
        }

        return result
    }

    return(
        <div className={`py-1 px-2 rounded-md text-sm text-white ${renderButton(state)}`}>{state}</div>
    )
}