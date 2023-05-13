import { useState } from "react"
import { useNavigate } from "react-router-dom";


export default function EvalEntries () {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [speechTitle, setSpeechTitle] = useState('')
  const [clarity, setClarity] = useState('');
  const [eyeContact, setEyeContact] = useState('');
  const [gestures, setGestures] = useState('')
  const [vocalVariety, setVocalVariety] = useState('');
  const [engagesAudience, setEngagesAudience] = useState('');
  const [comfortLevel, setComfortLevel] = useState('')
  const navigate = useNavigate();
   
  
  const handleAddEval = (e) => {
    e.preventDefault();
  
  // onSubmit...clear text boxes  
  // const arr = [clarity, eyeContact, gestures, vocalVariety, engagesAudience, comfortLevel]  

    fetch("https://api-toastmasters-jt.web.app/evals", {
      method: "POST",
      headers: { "Content-Type": "application/json",
     
    },
      
      body: JSON.stringify( {firstName, lastName, speechTitle, clarity,vocalVariety, eyeContact, gestures, engagesAudience, comfortLevel} )

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


  let evalNum = 0;
  const averageEval = 0;
  const sum = 0;
  const evalAverage = 0;

  function Average() {
    averageEval = sum/6
    return evalAverage
  }
  return (
    <>
    <main>
      <div>
        <h1>Evaluation Assistant</h1>
        <h3>Enter Evaluation Level</h3>
        <h3>5 - Excellent | 4 - Very Good | 3 - Good | 2 - Need Some Practice | 1 - Need A Trainer</h3>
      </div>
     
        <section className="start-main">
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
            className="clarity" 
            id="clarity" 
            type="text"
            value={speechTitle}
            onChange={ (e)=> { setSpeechTitle(e.target.value)}} />
        </label>

      <br />
    
          <label htmlFor="clarity">Clarity of Speech
            <input 
              className="clarity" 
              id="clarity" 
              type="number"
              value={clarity}
              onChange={ (e)=> { setClarity(e.target.value)}}
              /> 
          </label>
          
          <br />

          <label 
          htmlFor="vocalVariety">Uses Vocal Variety
            <input 
              className="vocalVariety" 
              id="vocalVariety"
              type="number"
              value={vocalVariety}
              onChange={ (e)=> { setVocalVariety(e.target.value)}} />
          </label>
          
          <br />

          <label className="eyeContact" id="eyeContact" htmlFor="eyeContact">Makes Eye Contact
            <input
              className="eyeContact" 
              id="eyeContact"
              type="number"
              value={eyeContact}
              onChange={ (e)=> { setEyeContact(e.target.value)}} />
          </label>

          <br />
          <label className="gestures" id="gestures" htmlFor="gestures">Uses Gestures
            <input 
              className="gestures" 
              id="gestures"
              type="number"
              value={gestures}
              onChange={ (e)=> { setGestures(e.target.value)}} />
          </label>
          
          <br />
          <label htmlFor="engagesAudience">Engages Audience
            <input 
              className="engagesAudience" 
              id="engagesAudience"  
              type="number"
              value={engagesAudience}
              onChange={ (e)=> { setEngagesAudience(e.target.value)}} />
          </label>
          
          <br />

          <label htmlFor="comfortLevel">Comfort Level
            <input
              className="comfortLevel" 
              id="comfortLevel"
              type="number"
              value={comfortLevel}
              onChange={ (e)=> { setComfortLevel(e.target.value)}} />
          </label>

          <br />

          <label htmlFor="evalAverage">Evaluation Average
            <input
              className="evalAverage" 
              id="evalAverage"
              type="number" 
              value={4.5} // test number for db - evalAverage variable
              onChange={ (e)=> { setComfortLevel(e.target.value)}} />
          </label>

          <br />

          <input type="submit" value="Submit" />
          
          <button onClick={ () => navigate("/") } >Next</button>

        </form>
      </section>
    </main>
    </>
  )
}


