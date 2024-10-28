import {BrowserRouter, Routes, Route , Navigate} from "react-router-dom"
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { Dashboard } from "./pages/Dashboard"
import { SendMoney } from "./pages/SendMoney"
import {RecoilRoot} from "recoil"
import { Sucess } from "./pages/Sucess"

function App() {


  return (
    
      <RecoilRoot>
        <div>
      {/* helllo */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/signup" replace />} />
          <Route path = "/signup" element = {<Signup/>} />
          <Route path = "/signin" element = {<Signin />} />
          <Route path = "/dashboard" element = {<Dashboard />} />
          <Route path = "/send" element = {<SendMoney />} />
          <Route path = "/success" element = {<Sucess/>} />
        </Routes>
      </BrowserRouter>
    </div>
      </RecoilRoot>
  )
}

export default App
