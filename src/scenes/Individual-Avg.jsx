import { useNavigate } from "react-router-dom";

export default function EvalRecaps () {
  const navigate = useNavigate();

  function sumAverage() {
    for (let i = 0; i < Array.length; i++) {
        
    }   
  } 

  return (
    <>
      <h2>Pompano Beach Toastmaster Club Individual Evaluator Averages</h2>
     


      <button onClick={ () => navigate("/") } >Go to Home</button>
    </>
  )
}
