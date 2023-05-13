import { useNavigate } from "react-router-dom";

export default function Home () {
  const navigate = useNavigate();

  return (
    <>
      <h2>Toastmasters International Evaluation Assistant</h2>
      <img src="https://media.istockphoto.com/id/1441320232/photo/silhouette-of-man-hands-up-to-challenge-2022-on-mountain-hill-happy-new-year-2023-man.jpg?b=1&s=170667a&w=0&k=20&c=bKPkOBAs7bkdPNcyFw_gtOD4-etssQTRXtNxAzSujWg=" alt="" />
      <p>Dolorum ullam eveniet consequuntur ratione labore illo natus odio quisquam ipsum non ex et reiciendis quidem, nam consequatur fugiat numquam eum assumenda.</p>
      
      <button onClick={ () => navigate("/Start") } >Start</button>
    </>
  )
}


