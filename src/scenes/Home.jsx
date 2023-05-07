import { useEffect } from "react";


export default function Home ( { evals, setEvals}) {

  useEffect( ()=> {
    fetch('https://tv-shows-api-c10.web.app/shows')
    .then(resp => resp.json())
    .then(setEvals)
    .catch(alert)
  },[]);

  
    
  return (
    <div className="main-container">
      <h1 >Home</h1>
      {!evals 
        ? ""
        : evals.map(
          (Eval) => (
            <div key={eval.id} 
              className="eval-container button-effect">
              <img src={eval.name} alt="" />
              <h2>{eval.title}</h2>
              <p>Level: {eval.level}</p>
            </div>
          )
        )
      }
      <h1>Toastmasters</h1>

      <img src="https://images.unsplash.com/photo-1533228876829-65c94e7b5025?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZyZWV8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60" alt="" />

      <h1>Toastmasters Evaluation Assistant</h1>

      <h2>by Jose Torres\n\n</h2>

      <h2>Software Engineer</h2>

      

    </div>

    
  )
}