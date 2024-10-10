import { useEffect, useState } from "react";
import { Avatar } from "../components/Avatar";
import { Balance } from "../components/Balance";
import { InputBox } from "../components/InputBox";
import axios from "axios";
import {useRecoilValue} from "recoil"
import { userAtom } from "../atoms/userAtom"

export function Dashboard (){
    const[balance,setBalance] = useState("0,000.00")
    const user = useRecoilValue(userAtom)
    const token = localStorage.getItem("token");
    
    useEffect(()=>{
        console.log(user)
        const fetchBalance = async()=> {
            const res = await axios.get("https://poor-tm-backend.vercel.app/api/v1/account/balance",{
            headers:{
                Authorization: `Bearer ${token}`}}
            )
            //console.log(res)  
            setBalance(Number(res.data.balance).toFixed(2))
            //console.log(balance)
        }
        fetchBalance()

    },[])
    


    

    return(
        <div>
            <div className="bg-gray-100 w-screen h-screen grid grid-rows-10 justify-items-start">
                <div className="w-50 h-20 mt-2 pl-2  shadow-md w-full bg-white flex justify-between"> 
                    <img className="w-36 h-14 mt-2 ml-2 " src= "/poortm.png" ></img>
                    <div className="flex items-center"> Hello <Avatar icon = {user.firstName.charAt(0).toUpperCase()}></Avatar></div>
                    </div>

                <div className="bg-white w-full h-11/12 shadow-md rounded-xl mt-10 row-span-9 ">
            
            
                    <div className="ml-10 mb-14 mt-4">
                        <Balance value={balance} ></Balance>
                    </div>

                    <div className="w-2/3 ml-10"><InputBox label="Send Money" placeholder="Type Name to Send Money"></InputBox>
                    </div>
                            
                </div>
            </div>
            
        </div>
    )
}
