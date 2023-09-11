import "./Card.css";
import linea from "./src/assets/pattern-divider-desktop.svg";
import icono from "./src/assets/icon-dice.svg";
function Card(props) {
  return (
    <>
      <div id="Cards">
        <div className="Card">
          <div id="inf">
            <div id="contid">
              <p>ADVICE #{props.id}</p>
            </div>
            <div id="titulo">
              <p>"{props.titulo}"</p>
            </div>

            <div id="lineas">
              <img src={linea} alt="" />
            </div>
          </div>
          <div id="redondo">
            <img src={icono} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
