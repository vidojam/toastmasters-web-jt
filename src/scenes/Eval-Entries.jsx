import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Start from "./Start";


export default function EvalEntries () {

  const navigate = useNavigate();
  const [clarity, setClarity] = useState('');
  const [eyeContact, setEyeContact] = useState('');
  const [gestures, setGestures] = useState('')
  const [vocalVariety, setVocalVariety] = useState('');
  const [engagesAudience, setEngagesAudience] = useState('');
  const [comfortLevel, setComfortLevel] = useState('')
   
  
  const handleAddEval = (e) => {
    e.preventDefault();

  // const arr = [clarity, eyeContact, gestures, vocalVariety, engagesAudience, comfortLevel]  

  // const token = localStorage.getItem("token")  // get our JWT from local storage

    fetch("https://api-toastmasters-jt.web.app/evals", {
      method: "POST",
      headers: { "Content-Type": "application/json",
     
    },
      
      body: JSON.stringify( {clarity,vocalVariety, eyeContact, gestures, engagesAudience, comfortLevel} )

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
        <h1>Evaluation Entries</h1>
        <h2>Enter Evaluation levels 1 to 5 (5 being best)</h2>
      </div>
      <section className="start-main">
        <form onSubmit={handleAddEval}>
        
           {/* <h2>{firstName}</h2>
           <h2>{lastname}</h2>
           <h2>{speechTitle}</h2>  */}

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
              sum = sum + e.target.value
              console.log(sum)
          
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
              value={evalAverage}
              onChange={ (e)=> { setComfortLevel(e.target.value)}} />
          </label>

          <br />

          Average()
          console.log(eval) 
          <input type="submit" value="Submit" />

          <button onClick={ () => navigate("/Eval-Recap") } >Next</button>
        
          {/* `The evaluation average for ${firstName} {lastName} is ${averEval}` */}

        </form>
      </section>
    </main>
    </>
  )
}


