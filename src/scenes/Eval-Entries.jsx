import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Eval () {

  const navigate = useNavigate();
  const [clarity, setClarity] = useState('');
  const [eyeContact, setEyeContact] = useState('');
  const [gestures, setGestures] = useState('')
  const [vocalVariety, setVocalVariety] = useState('');
  const [engagesAudience, setEngagesAudience] = useState('');
  const [confortLevel, setComfortLevel] = useState('')
   
  
  const handleAddEval = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token")  // get our JWT from local storage

    fetch("http://localhost:3002/evals", {
      method: "POST",
      headers: { "Content-Type": "application/json",
      "Authorization": token, 
    },
      
      body: JSON.stringify( {clarity,vocalVariety, eyeContact} )
    })
    .then(resp => resp.json())
    .then(data => {
      if(data.message) { 
        alert(data.message) 
        return 
      }
      eval(data);
      navigate("/");
    })
    .catch(alert)
  }


  return (
    <>
      <h1>Evaluation Entries</h1>
      <h2>Enter Evaluation levels 1 to 5 (5 being best)</h2>

    <form onSubmit={handleAddEval}>

    // firstName, lastName & speech title belows

      {/* <label htmlFor="firstName">First Name
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
      </label> */}

      <br />
      <label htmlFor="clarity">Clarity of Speech
        <input 
          type="text"
          value={clarity}
          onChange={ (e)=> { setClarity(e.target.value)}} />
      </label>
      
      <br />
      <label htmlFor="vocalVariety">Uses Vocal Variety
        <input 
          type="text"
          value={vocalVariety}
          onChange={ (e)=> { setVocalVariety(e.target.value)}} />
      </label>
      
      <br />

      <label htmlFor="eyeContact">Makes Eye Contact
        <input
          type="text"
          value={eyeContact}
          onChange={ (e)=> { setEyeContact(e.target.value)}} />
      </label>

      <br />
      <label htmlFor="gestures">Uses Gestures
        <input 
          type="text"
          value={gestures}
          onChange={ (e)=> { setGestures(e.target.value)}} />
      </label>
      
      <br />
      <label htmlFor="engagesAudience">Engages Audience
        <input 
          type="text"
          value={engagesAudience}
          onChange={ (e)=> { setEngagesAudience(e.target.value)}} />
      </label>
      
      <br />

      <label htmlFor="confortLevel">Comfort Level
        <input
          type="text"
          value={confortLevel}
          onChange={ (e)=> { setComfortLevel(e.target.value)}} />
      </label>

      <br />

      <input type="submit" value="Submit" />

      <button onClick={ () => navigate("/") } >Home</button>

    </form>
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
 
