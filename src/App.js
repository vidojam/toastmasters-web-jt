import { useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./scenes/Home.jsx";
import Evaluation from "./scenes/Evaluation.jsx";
// import Login from "./scenes/Login.jsx";
// import SignUp from "./scenes/Signup.jsx";


function App() {
  const [evals, setEvals] = useState();
  const [user, setUser] = useState();

  return (
    <>    
    <BrowserRouter>
      <Routes>
        <Route path="/"        element={ <Home shows={evals} setEvals={setEvals} /> } />
        <Route path="/Evaluation" element={ <Evaluation setEvals={setEvals} />} />
        {/* <Route path="/signup"  element={ <SignUp  setUser={setUser} /> } />
        <Route path="/login"   element={ <Login   setUser={setUser} />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
