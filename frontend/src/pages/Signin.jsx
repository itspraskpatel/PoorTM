import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { useState } from "react";

export function Signin (){
    const[username,setUsername] = useState("")
    const[password,setPassword] = useState("")
    const navigate = useNavigate();
    return(
        <div className="bg-gray-100 w-screen h-screen grid grid-cols-3 justify-center">
            <img className="w-36 h-14 mt-2 ml-2 " src = "/poortm.png" ></img>
            <div className="bg-white w-full h-4/5 shadow-md rounded-xl mt-16">
                <div className="grid place-items-center pt-4">
                    <Heading label = "Sign in"></Heading>
                    <SubHeading label = "Enter Details to Signin for PoorTM"></SubHeading>
                </div>
                
                <div className="pr-6 pl-6 pt-12 mb-24">
                <InputBox label = "Email"  placeholder = "abc@example.com" onChange={(e)=>{setUsername(e.target.value)}}></InputBox>
                <InputBox label = "Password" placeholder = "password" type="password" onChange={(e)=>{setPassword(e.target.value);}}></InputBox>
                </div >
                <div className="px-10 py-4"> <Button label = "Sign in" onClick={
                    
                    async()=>{
                    
                    try {
                        const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
                            username,
                            password
                        })
                        if(response.data.status == "error" ){
                            alert(response.data.message)
                        }else{
                            localStorage.setItem("token",response.data.token)
                            navigate("/dashboard")
                        }
                    }catch (error) {
                        console.log("error" + error)
                        alert("Wrong Email/Password")
                    }
                }}></Button> </div>
                <BottomWarning label="New User?" buttonText="Signup" to="/signup" ></BottomWarning>
            </div>
            
            
        </div>
    )
}