// import { useNavigate } from "react-router-dom";

// export default function Start () {

//   const navigate = useNavigate();
  
//   const handleAddEval = (e) => {
//     e.preventDefault();

//     fetch("https:////api-toastmasters-jt.web.app/evals", {
//       method: "POST",
//       headers: { "Content-Type": "application/json",
      
//     },
      
//       body: JSON.stringify( {firstName,lastName, speechTitle} )
//     })
//     .then(resp => resp.json())
//     .then(data => {
//       if(data.message) { 
//         alert(data.message) 
//         return 
//       }
//       Start(data);
//       navigate("/");
//     })
//     .catch(alert)
//   }

//   return (
//     <>
//       <h2>Toastmasters International</h2>

//       <form onSubmit={handleAddEval}>

   
//       <button onClick={ () => navigate("/Eval-Entries") } >Next</button>

//     </form>
//     </>
//   )
// }








