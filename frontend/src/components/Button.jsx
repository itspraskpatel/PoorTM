export function Button({label , onClick}){
    return (

        <button onClick={onClick} type= "button" className="rounded-md w-full h-10 bg-blue-900 text-white font-medium text-xl hover:bg-blue-950 focus:ring-4 focus:ring-blue-600"> {label}</button>
    )
}