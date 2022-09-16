import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CommentForm from "../components/CommentForm";

const CharacterDetailsPage = () => {
  const params = useParams();
  const [char, setChar] = useState(" ");

  const getCharDetails = async () => {
    const response = await axios.get(
      `https://hp-assessment-api.herokuapp.com/hp/character/${params.id}`
    );
    console.log(response.data);
    setChar(response.data);
  };

  useEffect(() => {
    getCharDetails();
  }, []);
  const addcomment = (name, comment) => {
    console.log("Let's add a new comment with the name:", name);
    setChar([...char], name, comment);
  };

  return (
    <div>
      <h2>{char.name}</h2>
      <img src={char.imgUrl} alt="charpic" width="250px" height="300px" />
      <p>DateOfBirth: {char.born}</p>

      <p>Quote : {char.quote}</p>
      <Link to="/characters">
        <button>back</button>
      </Link>
      <div className="comments">
        <CommentForm addcomment={addcomment} />
      </div>
    </div>
  );
};
export default CharacterDetailsPage;
