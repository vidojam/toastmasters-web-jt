import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";


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
  const [evalAverage, setEvalAverage ] =useState('')
  const navigate = useNavigate();

  //TODO!!!
  // onSubmit...clear text boxes  

  // const arr = [clarity, eyeContact, gestures, vocalVariety, engagesAudience, comfortLevel]  
  
  const handleAddEval = (e) => {
    e.preventDefault();

  
    fetch("https://api-toastmasters-jt.web.app/evals", {
      method: "POST",
      headers: { "Content-Type": "application/json",
     
    },
      
      body: JSON.stringify( {firstName, lastName, speechTitle, clarity,vocalVariety, eyeContact, gestures, engagesAudience, comfortLevel, evalAverage} )

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
    <main>
      <div className="main-eval">
        <h1>Evaluation Assistant</h1>
        <h2>Enter Evaluation Levels</h2>
        <h3 className="eval-levels">5 - Excellent | 4 - Very Good | 3 - Good | 2 - Need Practice | 1 - Need A Trainer</h3>
      </div>
     
        <section className="start-main">
          <form onSubmit={handleAddEval}>

          <label className="start-firstName" htmlFor="firstName">First Name
          <input 
            type="text"
            // pattern="[A-z]"
            // oninput="this.value = this.value.toUpperCase()"
            value={firstName}
            onChange={ (e)=> { setFirstName(e.target.value)}} />
        </label>
        
        <br />
        <label className="start-lastName" htmlFor="lastName">Last Name
          <input 
            type="text"
            value={lastName}
            onChange={ (e)=> { setLastName(e.target.value)}} />
        </label>
        
        <br />

        <label className="start-speechTitle" htmlFor="speechTitle">Speech Title
          <input
            value={speechTitle}
            onChange={ (e)=> { setSpeechTitle(e.target.value)}} />
        </label>

      <br />
          <div class="flex-container">
            <label htmlFor="clarity">Clarity of Speech
              <input 
                className="eval-sect" 
                id="clarity" 
                type="number"
                min="1"
                max="5"
                value={clarity}
                onChange={ (e)=> { setClarity(e.target.value)}}
                /> 
            </label>
            
            <br />

            <label 
            htmlFor="vocalVariety">Vocal Variety
              <input 
                className="eval-sect" 
                type="number"
                min="1"
                max="5"
                value={vocalVariety}
                onChange={ (e)=> { setVocalVariety(e.target.value)}} />
            </label>
            
            <br />

            <label className="eyeContact" id="eyeContact" htmlFor="eyeContact">Eye Contact
              <input
                className="eval-sect" 
                id="eyeContact"
                type="number"
                min="1"
                max="5"
                value={eyeContact}
                onChange={ (e)=> { setEyeContact(e.target.value)}} />
            </label>

            <br />
            <label className="gestures" id="gestures" htmlFor="gestures">Uses Gestures
              <input 
                className="eval-sect" 
                id="gestures"
                type="number"
                min="1"
                max="5"
                value={gestures}
                onChange={ (e)=> { setGestures(e.target.value)}} />
            </label>
            
            <br />
            <label htmlFor="engagesAudience">Engages Audience
              <input 
                className="eval-sect" 
                id="engagesAudience"  
                type="number"
                min="1"
                max="5"
                value={engagesAudience}
                onChange={ (e)=> { setEngagesAudience(e.target.value)}} />
            </label>
            
            <br />

            <label htmlFor="comfortLevel">Comfort Level
              <input
                className="eval-sect" 
                id="comfortLevel"
                type="number"
                min="1"
                max="5"
                value={comfortLevel}
                onChange={ (e)=> { setComfortLevel(e.target.value)}} />
            </label>

            <br />

            <label htmlFor="evalAverage">Evaluation Average

              <input
                className="eval-sect" 
                id="evalAverage"
                type="number" 
                min="0"
                max="5"
                value ={"average"} // test number for db - evalAverage variable
                onChange={ (e)=> { setEvalAverage(e.target.value)}} />
              
            </label>

          </div>

          <br />
          <div className="subnext">
            <input className="subbtn" type="submit" value="Submit" />
            <button className="nextbtn" onClick={ () => navigate("/Indiv-Recap") } >Next</button>
          </div>

        </form>

      </section>
      {Footer()}
    </main>
   
    </>
  )
}


