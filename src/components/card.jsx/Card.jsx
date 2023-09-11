import "./Card.css";
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
              <img src="./src/assets/pattern-divider-desktop.svg" alt="" />
            </div>
          </div>
          <div id="redondo">
            <img src="./src/assets/icon-dice.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
