import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning";

export function Signin (){
    return(
        <div className="bg-gray-100 w-screen h-screen flex justify-center items-center">
            <div className="bg-white w-96 h-4/5 shadow-md rounded-xl">
                <div className="grid place-items-center pt-4">
                    <Heading label = "Sign in"></Heading>
                    <SubHeading label = "Enter Details to Signin for PoorTM"></SubHeading>
                </div>
                
                <div className="grid justify-start pl-6 pt-4 w-96 pb-36">
                    <InputBox label = "Email"  placeholder = "abc@example.com"></InputBox>
                    <InputBox label = "Password" placeholder = "password" type="password"></InputBox>
                </div >
                <div className="px-10 py-4"> <Button label = "Sign in"></Button> </div>
                <BottomWarning label="New User?" buttonText="Signup" to="/signup"></BottomWarning>
            </div>
            
            
        </div>
    )
}