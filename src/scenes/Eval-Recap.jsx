import { useNavigate } from "react-router-dom";
import Start from "./Start";
import EvalEntries from "./Eval-Entries";


export default function EvalRecaps () {
  const navigate = useNavigate();

  function sumAverage() {
    for (let i = 0; i < Array.length; i++) {
        
    }   
  } 

  return (
    <>
      <h2>Evaluator Total Average</h2>
      

      <button onClick={ () => navigate("/") } >Go to Home</button>
    </>
  )
}