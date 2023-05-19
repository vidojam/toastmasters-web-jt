import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


export default function IndivRecap() {
  const [searchFirstName, setSearchFirstName] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    fetch(`https://api-toastmasters-jt.web.app/evals/search/${searchFirstName}`)
      .then(res => res.json())
      .then(data => {
        setSearchResult(data);
      })
      .catch(error => console.error(error))
  }, [searchFirstName]);

  return (
    <>
      <h1>Individual Evaluation History:</h1>
      <main>
        <form >
          <label className="start-firstName2" htmlFor="firstName">First Name
            <input
              type="text"
              placeholder="First Name"
              value={searchFirstName}
              onChange={(e) => { setSearchFirstName(e.target.value) }} />
          </label>

          {searchResult.length > 0 && (
            <div>
              {searchResult.map((evals) => {
                return (
                  <div>
                    <div className="eval-sect2" classname="result" key={evals._id}>
                      <h3>Speech Title:{evals.speechTitle}</h3>
                     
                      <h4>Clarity: {evals.clarity}</h4>
                      <h4>Vocal Variety: {evals.vocalVariety}</h4>
                      <h4>Eye Contact: {evals.eyeContact}</h4>
                      <h4>Gestures: {evals.gestures}</h4>
                      <h4>Engages Audience: {evals.engagesAudience}</h4>
                      <h4>Comfort Level: {evals.comfortLevel}</h4>
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          <div className="subnext2">
            <input className="subbtn2" type="submit" value="Submit" />
            <button className="nextbtn2" onClick={() => navigate("/")}>Go to Home</button>
          </div>
        </form>
      </main>
    
    </>
  )
}



    





