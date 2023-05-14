import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './scenes/About.js';
import Home from "./scenes/Home.jsx";
import EvaluationEntries from "./scenes/Eval-Entries.jsx"
import EvalRecaps from "./scenes/Indiv-Recap.jsx"
import ClubAvgs from './scenes/ClubAvgs.jsx';
// import Login from "./scenes/Login.jsx";
// import SignUp from "./scenes/Signup.jsx";



export default function App() {
 
  // const [user, setUser] = useState();

  return (
    <>  
    <BrowserRouter>
    <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/" className='App-link'>Home</Link> |&nbsp; 
            <Link to="/Eval-Entries" className='App-link'>Evaluation Entries</Link> |&nbsp; 
            <Link to="/Indiv-Recap" className='App-link'>Individual Evaluations</Link> |&nbsp; 
            <Link to="/Club-Avg" className='App-link'>Club Averages</Link> |&nbsp; 
            <Link to="/About" className='App-link'>About</Link>  
            {/* <Link to="/login" className='App-link'>Login</Link> |&nbsp; 
            <Link to="/signup" className='App-link'>Sign Up</Link> */}
          </nav>
          <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/Eval-Entries" element={<EvaluationEntries />} />
          <Route path="/Indiv-Recap" element={<EvalRecaps  />} />
          <Route path="/Club-Avgs" element={<ClubAvgs />} />
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

