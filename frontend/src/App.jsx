import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { Dashboard } from "./pages/Dashboard"
import { SendMoney } from "./pages/SendMoney"
import {RecoilRoot} from "recoil"

function App() {


  return (
    
      <RecoilRoot>
        <div>
      {/* helllo */}
      <BrowserRouter>
        <Routes>

          <Route path = "/signup" element = {<Signup/>} />
          <Route path = "/signin" element = {<Signin />} />
          <Route path = "/dashboard" element = {<Dashboard />} />
          <Route path = "/send" element = {<SendMoney />} />
        </Routes>
      </BrowserRouter>
    </div>
      </RecoilRoot>
  )
}

export default App
