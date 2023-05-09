import { useState} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './scenes/About.js';
import StartEvaluation from "./scenes/Start-Evaluation.jsx"
import IndividualAvg from './scenes/Individual-Avg.jsx';
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
    <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/" className='App-link'>Home</Link> |&nbsp; 
            <Link to="/StartEvaluation" className='App-link'>Start Evaluation</Link> |&nbsp; 
            <Link to="/Main-Entries" className='App-link'>Evaluation Entries</Link> |&nbsp; 
            <Link to="/Total-Recap" className='App-link'>All Evaluations</Link> |&nbsp; 
            <Link to="/Individual-Avg" className='App-link'>Individual Average</Link> |&nbsp; 
            <Link to="/About" className='App-link'>About</Link>  
            {/* <Link to="/login" className='App-link'>Login</Link> |&nbsp; 
            <Link to="/signup" className='App-link'>Sign Up</Link> */}
          </nav>
          <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/Start-Evaluation" element={<StartEvaluation />} />
          <Route path="/Main-Entries" element={<h1>Evaluation Entries</h1>} />
          <Route path="/Total-Recap" element={<h1>All Evaluations</h1>} />
          <Route path="/Individual-Avg" element={<IndividualAvg />} />
          <Route path="/about" element={<About />} /> 
            {/* <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} /> */}
           
          </Routes>
        </header>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
