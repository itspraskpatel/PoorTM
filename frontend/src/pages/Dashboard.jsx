import { Avatar } from "../components/Avatar";
import { Balance } from "../components/Balance";
import { InputBox } from "../components/InputBox";

export function Dashboard (){
    return(
        <div>
            <div className="bg-gray-100 w-screen h-screen grid grid-rows-10 justify-items-start">
                <div className="w-50 h-20 mt-2 pl-2  shadow-md w-full bg-white flex justify-between"> 
                    <img className="w-36 h-14 mt-2 ml-2 " src= "/poortm.png" ></img>
                    <div className="flex items-center"> Hello <Avatar icon = "P"></Avatar></div>
                    </div>

                <div className="bg-white w-full h-11/12 shadow-md rounded-xl mt-10 row-span-9 ">
            
            
                    <div className="ml-10 mb-14 mt-4">
                        <Balance value="100.876"></Balance>
                    </div>

                    <div className="w-2/3 ml-10"><InputBox label="Send Money" placeholder="Type Name to Send Money"></InputBox>
                    </div>
                            
                </div>
            </div>
            
        </div>
    )
}
