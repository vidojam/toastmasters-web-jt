import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './scenes/About.jsx';
import Home from "./scenes/Home.jsx";
import EvalRecaps from "./scenes/Indiv-Recap.jsx"
import EvalEntries from './scenes/Eval-Entries.jsx';
import "./App.css"





export default function App() {
 
  // const [user, setUser] = useState();

  return (
    <>  
    <BrowserRouter>
    <div className="App">
        <header className="app-header">
          <nav>
            <Link to="/" className='App-link'>Home</Link> |&nbsp; 
            <Link to="/Eval-Entries" className='App-link'>Evaluation Entries</Link> |&nbsp; 
            <Link to="/Indiv-Recap" className='App-link'>Individual Evaluations</Link> |&nbsp; 
            <Link to="/About" className='App-link'>About</Link>  
          </nav>
          <Routes>    
            <Route path="/" element={<Home />} />
            <Route path="/Eval-Entries" element={<EvalEntries />} />
            <Route path="/Indiv-Recap" element={<EvalRecaps  />} />
            <Route path="/about" element={<About />} /> 
          </Routes>
        
        </header>
      </div>
    </BrowserRouter>
    </>
  );
}

