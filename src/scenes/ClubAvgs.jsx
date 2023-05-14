import { useNavigate } from "react-router-dom";

export default function ClubAvgs () {
  const navigate = useNavigate();

  return (
    <>
      <h2>Pompano Beach Toastmaster Club Individual Evaluator Averages</h2>
     
     
      <button onClick={ () => navigate("/") } >Go to Home</button>
    </>
  )
}
