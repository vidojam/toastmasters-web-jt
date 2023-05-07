import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function AddEval({ setEvals }) {
  const [name, setName] = useState('');
  const [title, settitle] = useState('');
  const [level, setlevel] = useState('');
  const navigate = useNavigate();




  const handleAddEval = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token")  // get our JWT from local storage

    fetch("https://tv-shows-api-c10.web.app/shows", {
      method: "POST",
      headers: { "Content-Type": "application/json",
      "Authorization": token, 
    },
      
      body: JSON.stringify( {name, title, level} )
    })
    .then(resp => resp.json())
    .then(data => {
      if(data.message) { 
        alert(data.message) 
        return 
      }
      setEvals(data);
      navigate("/");
    })
    .catch(alert)
  }

  return (
    <>
    <h2>Add Eval</h2>
    <form onSubmit={handleAddEval}>
      <label htmlFor="name">Name
        <input 
          type="text"
          value={name}
          onChange={ (e)=> { setName(e.target.value)}} />
      </label>

      <br />

      <label htmlFor="title">Title
        <input
          type="text"
          value={title}
          onChange={ (e)=> { settitle(e.target.value)}} />
      </label>

      <br />

      <label htmlFor="level">Level
        <input 
          type="number"
          value={level}
          onChange={ (e)=>{ setlevel(e.target.value)} } />
      </label>

      <br />

      <input type="submit" value="Add Eval" />
    </form>
    </>
  )
}

  // const handleDelete = (showId) => {
  //   fetch(`https://tv-shows-api-xx.web.app/shows/${showId}`, {
  //     method:"DELETE",
  //     headers:{"Content-Type": "application/json"}
  //   })
  //   .then(resp => resp.json())
  //   .then(setShows)
  //   .catch(alert)
  // }

  // <button onClick={()=> handleDelete(showId)}>Delete Show</button>