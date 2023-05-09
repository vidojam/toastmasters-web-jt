import { useNavigate } from "react-router-dom";

export default function About () {
  const navigate = useNavigate();

  return (
    <>
      <h2>About</h2>
      <img src="https://media.istockphoto.com/id/1405730723/photo/empty-asphalt-road-and-new-year-2023-concept-driving-on-an-empty-road-to-goals-2023-with.jpg?b=1&s=170667a&w=0&k=20&c=xn2OFq_1n9KNM8OdUzIxKBH949UOqe5M4_VQ7XAcvwQ=" alt="" />
      <p>Dolorum ullam eveniet consequuntur ratione labore illo natus odio quisquam ipsum non ex et reiciendis quidem, nam consequatur fugiat numquam eum assumenda.</p>
      
      <button onClick={ () => navigate("/") } >Go to Home</button>
    </>
  )
}