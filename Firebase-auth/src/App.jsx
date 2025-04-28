
import './App.css'

import SignIn from './Pages/SIgnIn'
import SignUp from './Pages/SignUp'

function App() {


  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
      <div>
      <SignIn/>
      </div>
     <div>
     <SignUp/>
     </div>
    </div>
  )
}

export default App
