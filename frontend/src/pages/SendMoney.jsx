import { useState } from "react";
import { Avatar } from "../components/Avatar";
import { InputBox } from "../components/InputBox";

export function SendMoney (){
    const[amount, setAmount] = useState(0)
    return(
        <div className="w-screen h-screen bg-gray-200 flex justify-center items-center">
            <div className=" max-h-screen grid grid-rows gap-2 bg-white shadow-md rounded-xl p-4" >
                <div className="flex justify-center text-4xl">Send Money</div>
                <div className="flex "> 
                    <Avatar icon={localStorage.getItem("avatarIcon")}> </Avatar>
                    <div className="flex justify-center items-center text-2xl"> Param</div>
                </div>
                <InputBox label="Amount (in Rs)" placeholder="Enter Amount" onChange={(e)=>{setAmount(e.target.value)}}></InputBox>
                <button onClick={()=>{
                    const response = `https://poor-tm-backend.vercel.app/api/v1/account/transfer?amount=${amount}&to=${localStorage.getItem("toUser")}`
                }} type= "button" className="mt-4 w-11/12 h-10 mx-4 text-white bg-gradient-to-r from-green-500 via-green-600 to-green-600 hover:bg-gradient-to-br  focus:ring-green-300 font-medium rounded-lg text-2xl "> Initiate Transfer</button>
            </div>
        </div>
    )
}

