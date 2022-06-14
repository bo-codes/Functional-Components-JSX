import img from "./images/bulbasaur.jpg";
function Showcase() {
  const pokeCharacteristics = {
    type: "Grass",
    move: "Vine Whip"
  };
  const favPokemon = "Bulbasaur";
  return (
    <div>
      <h1> {`${favPokemon}'s' Showcase Component`}</h1>
      <img src={img} alt={favPokemon}></img>
      <h2>
        Bulbasaur's type is{" "}
        <span style={{ color: "white", backgroundColor: "green" }}>
          {pokeCharacteristics.type}
        </span>{" "}
        and one of their moves is{" "}
        <span style={{ color: "green", backgroundColor: "white" }}>
          {pokeCharacteristics.move}
        </span>
      </h2>
    </div>
  );
}

export default Showcase;
