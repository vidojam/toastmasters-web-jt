import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Start () {

  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [speechTitle, setSpeechTitle] = useState('')
  
  const handleAddEval = (e) => {
    e.preventDefault();



    const token = localStorage.getItem("token")  // get our JWT from local storage



    fetch("http://localhost:3002/evals", {
      method: "POST",
      headers: { "Content-Type": "application/json",
      "Authorization": token, 
    },
      
      body: JSON.stringify( {firstName,lastName, speechTitle} )
    })
    .then(resp => resp.json())
    .then(data => {
      if(data.message) { 
        alert(data.message) 
        return 
      }
      Start(data);
      navigate("/");
    })
    .catch(alert)
  }


  return (
    <>
      <h2>Start Evaluation</h2>

    <form onSubmit={handleAddEval}>
      <label htmlFor="firstName">First Name
        <input 
          type="text"
          value={firstName}
          onChange={ (e)=> { setFirstName(e.target.value)}} />
      </label>
      
      <br />
      <label htmlFor="lastName">Last Name
        <input 
          type="text"
          value={lastName}
          onChange={ (e)=> { setLastName(e.target.value)}} />
      </label>
      
      <br />

      <label htmlFor="speechTitle">Speech Title
        <input
          type="text"
          value={speechTitle}
          onChange={ (e)=> { setSpeechTitle(e.target.value)}} />
      </label>

      <br />

      <input type="submit" value="Submit" />
      <button onClick={ () => navigate("/Eval-Entries") } >Enter Evaluations</button>

    </form>
    </>
  )
}



// import { useState } from "react"
// import { useNavigate } from "react-router-dom";


// export default function AddEval({ setEvals }) {
//   const [name, setName] = useState('');
//   const [title, settitle] = useState('');
//   const navigate = useNavigate();

//   const handleAddEval = (e) => {
//     e.preventDefault();

//     const token = localStorage.getItem("token")  // get our JWT from local storage


//     fetch("http://localhost:3002/evals", {
//       method: "POST",
//       headers: { "Content-Type": "application/json",
//       "Authorization": token, 
//     },
      
//       body: JSON.stringify( {name, title} )
//     })
//     .then(resp => resp.json())
//     .then(data => {
//       if(data.message) { 
//         alert(data.message) 
//         return 
//       }
//       setEvals(data);
//       navigate("/");
//     })
//     .catch(alert)
//   }

//   return (
//     <>
    
//     <h2>Start Evaluation</h2>
//     <form onSubmit={handleAddEval}>
//       <label htmlFor="firstName">First Name
//         <input 
//           type="text"
//           value={firstName}
//           onChange={ (e)=> { setFirstName(e.target.value)}} />
//       </label>
      
//       <br />
//       <label htmlFor="lastName">Last Name
//         <input 
//           type="text"
//           value={lastName}
//           onChange={ (e)=> { setLastName(e.target.value)}} />
//       </label>
      
//       <br />

//       <label htmlFor="speechTitle">Speech Title
//         <input
//           type="text"
//           value={speechTitle}
//           onChange={ (e)=> { setspeechTitle(e.target.value)}} />
//       </label>

//       <br />

//       <input type="submit" value="Add Eval" />
//     </form>
//     </>
//   )
// }
