import { useNavigate } from "react-router-dom";

export default function Start () {
  const navigate = useNavigate();
  return (
    <>
      <h2>Start</h2>
      <img src="https://picsum.photos/300/300?" alt="" />
      <p>Dolorum ullam eveniet consequuntur ratione labore illo natus odio quisquam ipsum non ex et reiciendis quidem, nam consequatur fugiat numquam eum assumenda.</p>
      
      <button onClick={ () => navigate("/") } >Evaluation Entries</button>
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
    
//     <h2>Start Testing</h2>
//     <form onSubmit={handleAddEval}>
//       <label htmlFor="name">Name
//         <input 
//           type="text"
//           value={name}
//           onChange={ (e)=> { setName(e.target.value)}} />
//       </label>
      
//       <br />

//       <label htmlFor="title">Title of Speech
//         <input
//           type="text"
//           value={title}
//           onChange={ (e)=> { settitle(e.target.value)}} />
//       </label>
//       <test>!!!!!!</test>
//       <br />

//       <input type="submit" value="Add Eval" />
//     </form>
//     </>
//   )
// }
