import "./Card.css";
function Card(props) {
  return (
    <>
      <div id="Cards">
        <div className="Card">
          <div id="inf">
            <div id="contid">
              <p>ADVICES #{props.id}</p>
            </div>
            <div id="titulo">
              <p>"{props.titulo}"</p>
            </div>

            <div id="lineas">
              <img src={props.fnlinea} alt=".." />
            </div>
          </div>
          <div id="redondo">
            <img src={props.fnicono} alt=".." />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
