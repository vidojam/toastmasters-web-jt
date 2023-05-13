import { useNavigate } from "react-router-dom";
import Start from "./Start";
import EvalEntries from "./Eval-Entries";


export default function EvalRecaps () {
  const navigate = useNavigate();

  // findOne({ firstName: Niel, lastName: Armstrong })
 
  return (
    <>
      <h2>Evaluator Total Average</h2>
      

      <button onClick={ () => navigate("/") } >Go to Home</button>
    </>
  )
}