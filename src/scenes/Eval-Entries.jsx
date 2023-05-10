
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function EvaluationEntries () {
  const navigate = useNavigate();


  return (
    <>
      <h2>Evaluation Entries</h2>
      <img src="https://media.istockphoto.com/id/1405730723/photo/empty-asphalt-road-and-new-year-2023-concept-driving-on-an-empty-road-to-goals-2023-with.jpg?b=1&s=170667a&w=0&k=20&c=xn2OFq_1n9KNM8OdUzIxKBH949UOqe5M4_VQ7XAcvwQ=" alt="" 
      />
     
           


      <button onClick={ () => navigate("/") } >Go to Home</button>
    </>
  )
}

// export default function AddEval({ setEvals }) {
//   const [name, setName] = useState('');
//   const [title, setTitle] = useState('');
//   const [clrlevel, setClrlevel] = useState('');
//   const [eyelevel, setEyelevel] = useState('');
//   const [geslevel, setGeslevel] = useState('');
//   const [voclevel, setVoclevel] = useState('');
//   const [audlevel, setAudLevel] = useState('');
//   const [conflevel, setConfLevel] = useState('');
//   const [intrlevel, setIntrLevel] = useState('');
//   const navigate = useNavigate();

//   const handleAddEval = (e) => {
//     e.preventDefault();

//     const token = localStorage.getItem("token")  // get our JWT from local storage

//     fetch("http://localhost:3002/evals", {
//       method: "POST",
//       headers: { "Content-Type": "application/json",
//       "Authorization": token, 
//     },
      
//       body: JSON.stringify( {name, title, level} )
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
//     <h2>${name}</h2>
//     <h2>${speech}</h2>
//     <form onSubmit={handleAddEval}>
//       <label htmlFor="name">Name
//         <input 
//           type="text"
//           value={name}
//           onChange={ (e)=> { setName(e.target.value)}} />
//       </label>

//       <br />

//       <label htmlFor="title">Title
//         <input
//           type="text"
//           value={title}
//           onChange={ (e)=> { setTitle(e.target.value)}} />
//       </label>

//       <br />

//       <label htmlFor="clrlevel">Level
//         <input 
//           type="number"
//           value={clrlevel}
//           onChange={ (e)=>{ setlevel(e.target.value)} } />
//       </label>

//       <br />
//       <label htmlFor="eyelevel">Level
//         <input 
//           type="number"
//           value={eyelevel}
//           onChange={ (e)=>{ setlevel(e.target.value)} } />
//       </label>

//       <br />
//       <label htmlFor="geslevel">Level
//         <input 
//           type="number"
//           value={geslevel}
//           onChange={ (e)=>{ setlevel(e.target.value)} } />
//       </label>

//       <br />
//       <label htmlFor="voclevel">Level
//         <input 
//           type="number"
//           value={voclevel}
//           onChange={ (e)=>{ setlevel(e.target.value)} } />
//       </label>

//       <br />
//       <label htmlFor="audlevel">Level
//         <input 
//           type="number"
//           value={audlevel}
//           onChange={ (e)=>{ setlevel(e.target.value)} } />
//       </label>

//       <br />
//       <label htmlFor="conflevel">Level
//         <input 
//           type="number"
//           value={conflevel}
//           onChange={ (e)=>{ setlevel(e.target.value)} } />
//       </label>

//       <br />
//       <label htmlFor="intrlevel">Level
//         <input 
//           type="number"
//           value={intrlevel}
//           onChange={ (e)=>{ setlevel(e.target.value)} } />
//       </label>

//       <br />

//       <input type="submit" value="Add Eval" />
//     </form>
//     </>
//   )
// }

//   // const handleDelete = (showId) => {
//   //   fetch(`https://tv-shows-api-xx.web.app/shows/${showId}`, {
//   //     method:"DELETE",
//   //     headers:{"Content-Type": "application/json"}
//   //   })
//   //   .then(resp => resp.json())
//   //   .then(setShows)
//   //   .catch(alert)
//   // }

//   // <button onClick={()=> handleDelete(showId)}>Delete Show</button>
 
