import React, { useState, useEffect } from "react";
import axios from "axios";

function Firstdata() {
  const [data, setData] = useState([]);
  console.log("Name", data.name);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/1/")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>{data.name}</h1>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
      />
      <div className="abilities">
        {/* {data.abilities.map((poke) => {
            return (
              <>
                <div className="group">
                  <h2>{poke.ability.name}</h2>
                </div>
              </>
            );
          })} */}
        <h3>hdoifh</h3>
      </div>
      <div className="base-stat">
        {/* {data.stats.map((poke) => {
          return (
            <>
              <h3>
                {poke.stat.name}:{poke.base_stat}
              </h3>
            </>
          );
        })} */}
        <h3>fgdfdhfhdhtu</h3>
      </div>

      {/* <div key={data.id}>
        <h1>{data.name}</h1>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
        />
        <div className="abilities">
          {data.abilities.map((poke) => {
            return (
              <>
                <div className="group">
                  <h2>{poke.ability.name}</h2>
                </div>
              </>
            );
          })}
        </div>
        <div className="base-stat">
          {data.stats.map((poke) => {
            return (
              <>
                <h3>
                  {poke.stat.name}:{poke.base_stat}
                </h3>
              </>
            );
          })}
        </div>
      </div> */}
    </>
  );
}

export default Firstdata;
