import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


export default function IndivRecap () {
  // function ItemList() {
   const [evals, setEvals] = useState(['firstName', 'lastName', 'speechTitle', 'clarity', 'vocalVariety', 'eyeContact', 'gestures', 'engagesAudience', 'confortLevel' , 'evalAverage']);
    const navigate = useNavigate();

    const handleAddEval = (e) => {
      e.preventDefault();
    }

      useEffect(() => {
        fetch("https://api-toastmasters-jt.web.app/evals")
        .then(res => res.json())
        .then(evals => console.log(evals))
        //.then(data => setEvals(data))
        .catch(error => console.error(error))
      }, [evals])
  
    return (
      <>

      <h1></h1>
        <main>
          <form onSubmit={handleAddEval}>
          <h2>Results for:</h2>
            <ul>
              {evals.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <input type="submit" value="Submit" />
            <button onClick={ () => navigate("/") } >Go to Home</button>
            </form>
        </main>
      </>
    )
  // }
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




