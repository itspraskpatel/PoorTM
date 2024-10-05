import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { BottomWarning } from "../components/BottomWarning"
import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom"
export const Signup = ()=>{
    const[firstName,setFirstName] = useState("")
    const[lastName,setLastName] = useState("")
    const[username,setUsername] = useState("")
    const[password,setPassword] = useState("")
    const navigate = useNavigate();
    return(
        
        <div className="bg-gray-100 w-screen h-screen grid grid-cols-3 justify-center">
            <img className="w-36 h-14 mt-2 ml-2 " src= "/poortm.png" ></img>
            <div className="bg-white w-full h-5/6 shadow-md rounded-xl mt-16">
                <div className="grid place-items-center pt-4">
                    <Heading label = "Sign up"></Heading>
                    <SubHeading label = "Enter Details to Signup for PoorTM"></SubHeading>
                </div>
                
                <div className="pr-6 pl-6 pt-4">
                    <InputBox label = "First Name"  placeholder = "John" onChange={(e)=>{setFirstName(e.target.value);}}></InputBox>
                    <InputBox label = "Last Name"  placeholder = "Doe" onChange={(e)=>{setLastName(e.target.value);}} ></InputBox>
                    <InputBox label = "Email"  placeholder = "abc@example.com" onChange={(e)=>{setUsername(e.target.value)}}></InputBox>
                    <InputBox label = "Password" placeholder = "password" type="password" onChange={(e)=>{setPassword(e.target.value);}}></InputBox>
                </div>
                <div className="px-10 py-4"> <Button label = "Sign up" onClick={async ()=>{
                    try {
                        console.log(typeof username)
                        const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
                            username,
                            password,
                            firstName,
                            lastName
                            }).then( (res)=>{ 
                                console.log(res)
                                if(res.data.status == "error" ){
                                    alert(res.data.message)
                                }else{
                                    localStorage.setItem("token", res.data.token)
                                    navigate("/dashboard")
                                }})
                    } catch (error) {
                        console.log(error)
                        alert("Wrong Email!!!")
                    }


                    }}></Button> 
                
                </div>       
                <BottomWarning label="Already have an Account?" buttonText="Signin" to="/signin"></BottomWarning>     
            </div>
            
            
        </div>
    )
}