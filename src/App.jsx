import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card.jsx/Card";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function getData() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const json = await res.json();
    setData(json)
    }
    getData();
  }, []);
  console.log(data)
  return(
    <>
    <div id="General">
    {data===null
    ? "cargando"
    : <Card id={data.slip.id}  titulo={data.slip.advice}></Card>
    }
    </div>
    
    </>
  );
}

export default App;
