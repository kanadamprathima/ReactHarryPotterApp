// ➕ Bonus 4 - House details page
// API endpoint: [ https://hp-assessment-api.herokuapp.com/hp/house/:id ]

// Clicking on the house of a character (house name or houseId) in the Homepage takes you to a details page
// A house is displayed with all it's values (founder, animal, imgUrl, etc)
// There's also a list of students belonging to that house (ideally you use the separate component created for the Homepage)
// Params are used to get the house id
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const HouseDetailsPage = () => {
  const [house, setHouse] = useState(" ");
  const params = useParams();

  const getHouseList = async () => {
    const response = await axios.get(
      `https://hp-assessment-api.herokuapp.com/hp/house/${params.houseId}`
    );
    console.log("housesPage list", response.data);
    setHouse(response.data);
  };
  useEffect(() => {
    getHouseList();
  }, []);
  //console.log("housesstate", house);

  return (
    <div>
      <h1>House details page</h1>
      <br />
      <h1>
        ({house.id}) {house.name}
      </h1>
      <h3>House Founder : {house.founder}</h3>
      <img src={house.imgUrl} alt="housename" width="600px" height="400px" />
      <h4>Animal Name :{house.animal}</h4>
      <p>House Colours:{house.colors}</p>
      <Link to="/characters">
        <button>Back</button>
      </Link>
    </div>
  );
};
export default HouseDetailsPage;
