import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card.jsx/Card";
import linea from "./assets/pattern-divider-desktop.svg";
import icono from "./assets/icon-dice.svg";
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
    : <Card fnlinea ={linea} fnicono = {icono} id={data.slip.id}  titulo={data.slip.advice}></Card>
    }
    </div>
    
    </>
  );
}

export default App;
