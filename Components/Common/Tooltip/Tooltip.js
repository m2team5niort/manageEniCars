export default function Tooltip({children, message}){
    return(
        <div className="relative flex flex-col items-center group">
            {children}
            <div className="absolute bottom-0 flex flex-col items-center hidden mb-10 group-hover:flex w-96">
                <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-gray-800 shadow-lg rounded-md flex">{message}</span>
                <div className="w-3 h-3 -mt-2 rotate-45 bg-gray-800"></div>
            </div>
        </div>
    )
}