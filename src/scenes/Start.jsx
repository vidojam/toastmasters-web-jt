import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Start () {

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [speechTitle, setSpeechTitle] = useState('')
  
  const handleAddEval = (e) => {
    e.preventDefault();

    fetch("https:////api-toastmasters-jt.web.app/evals", {
      method: "POST",
      headers: { "Content-Type": "application/json",
      
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

      <label className="start" htmlFor="firstName">First Name
        <input 
          type="text"
          value={firstName}
          onChange={ (e)=> { setFirstName(e.target.value)}} />
      </label>
      
      <br />
      <label className="start" htmlFor="lastName">Last Name
        <input 
          type="text"
          value={lastName}
          onChange={ (e)=> { setLastName(e.target.value)}} />
      </label>
      
      <br />

      <label className="speechTitle" htmlFor="speechTitle">Speech Title
        <input
          type="text"
          value={speechTitle}
          onChange={ (e)=> { setSpeechTitle(e.target.value)}} />
      </label>

      <br />

      <input type="submit" value="Submit" />
      <button onClick={ () => navigate("/Eval-Entries") } >Next</button>

    </form>
    </>
  )
}



// import { useState } from "react"
// import { useNavigate } from "react-router-dom";



