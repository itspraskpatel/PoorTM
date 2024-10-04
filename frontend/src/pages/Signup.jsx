import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"

export const Signup = ()=>{
    return(
        <div className="bg-gray-100 w-screen h-screen flex justify-center items-center">
            <div className="bg-white w-96 h-4/5 shadow-md rounded-xl">
                <div className="grid place-items-center pt-4">
                    <Heading label = "Sign up"></Heading>
                    <SubHeading label = "Enter Details to Signup for PoorTM"></SubHeading>
                </div>
                
                <div className="grid justify-start pl-6 pt-4 w-96">
                    <InputBox label = "First Name"  placeholder = "John"></InputBox>
                    <InputBox label = "Last Name"  placeholder = "Doe" ></InputBox>
                    <InputBox label = "Email"  placeholder = "abc@example.com"></InputBox>
                    <InputBox label = "Password" placeholder = "password" ></InputBox>
                </div>
                <div className="px-10 py-4"> <Button label = "Sign up"></Button> </div>
                <div className="text-gray-600 flex justify-end pr-2"> Already a user? <button className=" text-gray-600 pl-2 underline font-medium hover:text-blue-800">Sign in</button></div>
            </div>
            
            
        </div>
    )
}