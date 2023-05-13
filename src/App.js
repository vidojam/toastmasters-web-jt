import { useState} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './scenes/About.js';
import Start from "./scenes/Start.jsx"
import IndividualAvg from './scenes/Individual-Avg.jsx';
import Home from "./scenes/Home.jsx";
import EvaluationEntries from "./scenes/Eval-Entries.jsx"
import EvalRecaps from "./scenes/Eval-Recap.jsx"
import Evaluation from "./scenes/Evaluation.jsx";
// import Login from "./scenes/Login.jsx";
// import SignUp from "./scenes/Signup.jsx";



function App() {
  const [evals, setEvals] = useState();
  // const [user, setUser] = useState();

  return (
    <>  
    <BrowserRouter>
    <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/" className='App-link'>Home</Link> |&nbsp; 
            {/* <Link to="/Start" className='App-link'>Start</Link> |&nbsp;  */}
            <Link to="/Eval-Entries" className='App-link'>Evaluation Entries</Link> |&nbsp; 
            <Link to="/Eval-Recap" className='App-link'>Evaluator Total Average</Link> |&nbsp; 
            <Link to="/Individual-Avg" className='App-link'>Club Averages</Link> |&nbsp; 
            <Link to="/About" className='App-link'>About</Link>  
            {/* <Link to="/login" className='App-link'>Login</Link> |&nbsp; 
            <Link to="/signup" className='App-link'>Sign Up</Link> */}
          </nav>
          <Routes>
          
          <Route path="/" element={<Home />} />
          {/* <Route path="/Start" element={<Start />} /> */}
          <Route path="/Eval-Entries" element={<EvaluationEntries />} />
          <Route path="/Eval-Recap" element={<EvalRecaps />} />
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
