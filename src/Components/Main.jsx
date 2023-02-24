import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";

import "./style.css";

const Main = () => {
  const [pockeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setprevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();

  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
    console.log(res.data.results);
    setNextUrl(res.data.next);
    setprevUrl(res.data.prevoius);
    getpokemon(res.data.results);
    setLoading(false);
  };
  const getpokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      //console.log(result.data);
      setPokeData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };
  useEffect(() => {
    pokeFun();
  }, [url]);

  return (
    <>
      <div className="container">
        <div className="left-content">
          <Card
            pockeData={pockeData}
            loading={loading}
            infoPokemon={(poke) => setPokeDex(poke)}
          />

          <div className="btn-group">
            <button
              onClick={() => {
                setPokeData([]);
                setUrl(prevUrl);
              }}
            >
              Previous
            </button>
            <button
              onClick={() => {
                setPokeData([]);
                setUrl(nextUrl);
              }}
            >
              Previous
            </button>
          </div>
        </div>
        <div className="right-content">
          <Pokeinfo data={pokeDex} newData={pokeDex} />
        </div>
      </div>
    </>
  );
};

export default Main;
