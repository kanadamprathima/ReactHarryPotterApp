import { Link } from "react-router-dom";

const CharBlock = (props) => {
  return (
    <div>
      <h2>
        ( {props.id} ) Name = {props.name}
      </h2>

      <img src={props.img} width="200px" alt="charpic" />
      <p>dateofBirth:{props.dob}</p>
      <Link to={`/house/${props.houseId}`}>
        <p>House name = {props.house}</p>
        <p>HouseId = {props.houseId}</p>
      </Link>

      <Link to={`/character/${props.id}`}>
        <button>Read More... </button>
      </Link>
    </div>
  );
};
export default CharBlock;
