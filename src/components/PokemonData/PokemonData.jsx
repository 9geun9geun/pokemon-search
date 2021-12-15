import React from "react";
import "./PokemonData.styles.scss";

const PokemonData = (props) => {
  return (
    <div>
      <div className="image-container">
        <h1> Name: {props.name}</h1>

        <img className="pokemon-img" alt="pokemon img" src={props.sprite} />
      </div>
      <div className="movesets-container">
        <h1>
          {" "}
          There are a total of {props.moves.length} moves for{" "}
          {props.name.toUpperCase()}
        </h1>
        {props.moves.map((move, key) => (
          <div className="movesets" key={key}>
            <p>
              {" "}
              {key} : {move.move.name}{" "}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PokemonData;
