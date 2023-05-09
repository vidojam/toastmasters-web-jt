import { useNavigate } from "react-router-dom";

export default function Home () {
  const navigate = useNavigate();

  return (
    <>
      <h2>Home</h2>
      <img src="https://media.istockphoto.com/id/1441320232/photo/silhouette-of-man-hands-up-to-challenge-2022-on-mountain-hill-happy-new-year-2023-man.jpg?b=1&s=170667a&w=0&k=20&c=bKPkOBAs7bkdPNcyFw_gtOD4-etssQTRXtNxAzSujWg=" alt="" />
      <p>Dolorum ullam eveniet consequuntur ratione labore illo natus odio quisquam ipsum non ex et reiciendis quidem, nam consequatur fugiat numquam eum assumenda.</p>
      
      <button onClick={ () => navigate("/Start-Evaluation") } >Start Evaluation</button>
    </>
  )
}

// import { useEffect } from "react";

// export default function Home ( { evals, setEvals}) {

//   useEffect( ()=> {
//     fetch("http://localhost:3002/evals")
//     .then(resp => resp.json())
//     .then(setEvals)
//     .catch(alert)
//   },[]);

//       // alert("This is javascript!")
//       function handleForm(event) {
//         event.preventDefault();
//         console.log(event.target);
//       }
    
//   return (
//     <div className="main-container">
//       <h1 >Home</h1>
//       {!evals 
//         ? ""
//         : evals.map(
//           (Eval) => (
//             <div key={eval.id} 
//               className="eval-container button-effect">
//               <img src={eval.name} alt="" />
//               <h2>{eval.title}</h2>
//               <p>Level: {eval.level}</p>
//             </div>
//           )
//         )
//       }

//       <h1>Toastmasters International</h1>

//       <img src="https://images.unsplash.com/photo-1533228876829-65c94e7b5025?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZyZWV8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60" alt="" />
//       <h3>"The Sky's The Limit" - Cervantes in his famous masterpiece, Don Quixote</h3>

//       <h2>by Jose Torres</h2>
      
//       <h2>Software Engineer</h2>

//       <hr></hr>
  

//       <h1 class="aboutme">About Me</h1>
//       <img background-image="aboutme"src="https://images.unsplash.com/photo-1507835661088-ac1e84fe645f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZyZWV8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60" alt="" />
//       <h2>One</h2>  
//       <h2>Two</h2>  
//       <h2>Three</h2>  
//       <hr></hr>
      
//       <h1 class="problem">Problem</h1>
//       <img background-image="problem"src="https://images.unsplash.com/photo-1504194104404-433180773017?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZyZWV8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60" alt="" />
//       <h2>One</h2>  
//       <h2>Two</h2>  
//       <h2>Three</h2> 

//       <hr></hr>

//       <h1 class = "solution" >Solution</h1>
//       <img background-image="solution"src="https://plus.unsplash.com/premium_photo-1668241683681-45500829fa42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZyZWV8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60" alt="" />
//       <h2>One</h2>  
//       <h2>Two</h2>  
//       <h2>Three</h2> 

//       <hr></hr>

//       <h1 font-size="100px"class="demo">DEMO</h1>

//       <h2>
//             https://vidojam/WorkingOnThis...
//       </h2>

//       <hr></hr>
      
//       <h1>Evaluation Assistant</h1>
    
//     <form onsubmit="handleForm(event)">
//       <label for="username">
//         Name:
//         <input id="name" type="text" name="username" placeholder="Enter Name"/>
//       </label>
//       <label for="title">
//         Title:
//         <input id="title" type="text" name="title" placeholder="Title of Speech"/>
//       </label>
//       <label for="level">
//         Level:
//         <input id="level" type="number" name="level" placeholder="Level 1 thru (5 best)"/>
//       </label>
//       <input type="submit" value="Submit" />
//     </form>
      
//     <hr></hr>  

//     <h1>Tech Stack</h1>
//     <ul>
//       <li>Mongo</li>
//       <li>Express & Node.js</li>
//       <li>React.js</li>
//     </ul>

//     <hr></hr>
      
//     <h1>Future Work</h1>
//     <ol>
//       <li>Table Topics</li>
//       <li>Evaluators</li>
//       <li>Mobile</li>
//     </ol>
      
//     <hr></hr>

//     <h1>Links</h1>

//       <h2>Email: jose.torres8672@icloud.com</h2>  
//       <h2>LinkedIn... </h2>  
//       <h2>GitHub...</h2>  
      
//     <hr></hr>
  
//     </div>

    
//   )
// }