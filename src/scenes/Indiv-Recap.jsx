import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


export default function IndivRecap() {
  const [searchFirstName, setSearchFirstName] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const navigate = useNavigate();

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
      <h3>Individual History Request:</h3>

      <main>
        <form>
          <label className="start" htmlFor="firstName">First Name
            <input
              type="text"
              placeholder="First Name"
              value={searchFirstName}
              onChange={(e) => { setSearchFirstName(e.target.value) }} />
          </label>

          <br />

          <input type="submit" value="Submit" />
          {searchResult.length > 0 && (
            <div>
              {searchResult.map((evals) => {
                return (
                  <div key={evals._id}>
                    <h3>Speech Title: {evals.speechTitle}</h3>
                    <h3>Clarity: {evals.clarity}</h3>
                    <h3>Vocal Variety: {evals.vocalVariety}</h3>
                    <h3>Eye Contact: {evals.eyeContact}</h3>
                    <h3>Gestures: {evals.gestures}</h3>
                    <h3>Engages Audience: {evals.engagesAudience}</h3>
                    <h3>Comfort Level: {evals.comfortLevel}</h3>

                  </div>
                )
              })}
            </div>
          )}

          <button onClick={() => navigate("/")}>Go to Home</button>
        </form>
      </main>
    </>
  )
}



    // findOne({ firstName: Niel, lastName:Armstrong})

    // App.get ('/api/evals/firstName', async (req, res) => {
    //   const result = await eval.findOne(req.params.firstName, {
    //     firstName: 1,
    //     lastName: 1
    //   });
    //   res.json({"evals": result});
    // })

    //db.products.find( { "firstName" : "Niel" } ).map(function(i) { return i.item; })




