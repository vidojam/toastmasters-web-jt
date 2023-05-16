import { useNavigate } from "react-router-dom";

export default function Home () {
  const navigate = useNavigate();

  return (
    <>
      <h1>Toastmasters International Evaluation Assistant</h1>
      <img className = "homeimg" src="https://media.istockphoto.com/id/1441320232/photo/silhouette-of-man-hands-up-to-challenge-2022-on-mountain-hill-happy-new-year-2023-man.jpg?b=1&s=170667a&w=0&k=20&c=bKPkOBAs7bkdPNcyFw_gtOD4-etssQTRXtNxAzSujWg=" alt="" />
      <p className = "toastorg" >Toastmasters International is a nonprofit educational organization that teaches public speaking and leadership skills through a worldwide network of clubs.</p>
      
      <button className="homebtn" onClick={ () => navigate("/Eval-Entries") } >Start</button>
    </>
  )
}


