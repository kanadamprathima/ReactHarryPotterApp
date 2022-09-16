import axios from "axios";
import { useEffect, useState } from "react";
import CharBlock from "../components/CharBlock";

const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [home, setHome] = useState([]);
  const [selected, setSelected] = useState("All");

  const getHouses = async () => {
    const res = await axios.get(
      "https://hp-assessment-api.herokuapp.com/hp/houses"
    );
    console.log("houses list", res.data);
    setHome(res.data);
  };
  console.log("home console", home);
  const getCharacters = async () => {
    const response = await axios.get(
      "https://hp-assessment-api.herokuapp.com/hp/characters"
    );
    console.log(response.data);
    setCharacters(response.data);
  };
  useEffect(() => {
    getCharacters();
    getHouses();
  }, []);
  // console.log("selected: ", selected);
  const displayCharacter =
    selected === "All"
      ? characters
      : characters.filter((char) => char.houseId === parseInt(selected));

  return (
    <div>
      <h1>Characters Page</h1>
      <select onChange={(e) => setSelected(e.target.value)}>
        <option value="All">All</option>
        {home.map((h, i) => (
          <option key={i} value={h.id}>
            {h.name}
          </option>
        ))}
      </select>

      {!characters ? (
        <p>Loading..</p>
      ) : (
        displayCharacter
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((charx, index) => (
            <ul key={index}>
              <li>
                <CharBlock
                  key={index}
                  id={charx.id}
                  name={charx.name}
                  img={charx.imgUrl}
                  dob={charx.born}
                  house={charx.house?.name}
                  houseId={charx.houseId}
                />
              </li>
            </ul>
          ))
      )}
    </div>
  );
};
export default HomePage;
