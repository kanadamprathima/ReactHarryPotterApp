import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import CharacterDetailsPage from "./Pages/CharacterDetailsPage";
import HomePage from "./Pages/HomePage";
import HouseDetailsPage from "./Pages/HouseDetailsPage";

function App() {
  return (
    <div className="App">
      <h1>Harrypotter app</h1>
      <NavLink to="/characters">Home</NavLink>
      <br />
      <NavLink to="/character/:id ">CharacterDetails</NavLink>
      <Routes>
        <Route path="/characters" element={<HomePage />} />
        <Route path="/character/:id" element={<CharacterDetailsPage />} />
        <Route path="/house/:houseId" element={<HouseDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
