import React, { useState } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import Cards from "../../components/cards/Cards";
import homeSvg from "../../assets/home.svg";

const Home = () => {
  const [food, setFood] = useState("");
  const [mealType, setMealType] = useState("");
  const [products, setProducts] = useState([]);

  const getFoot = async () => {
    const APP_ID = process.env.REACT_APP_API_ID;
    const APP_KEY = process.env.REACT_APP_API_KEY;
    const url = `https://api.edamam.com/api/recipes/v2?type=any&beta=false&q=${food}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`;
    if (food) {
      try {
        const { data } = await axios(url);
        console.log("data :>> ", data);
        setProducts(data.hits);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("In order to view the recipe, you need to fill out the form.");
    }
  };
  console.log(products);

  const handleClick = (e) => {
    e.preventDefault();
    getFoot();
  };
  console.log("products", products);
  return (
    <div className="home">
      <h1>Recipe App</h1>
      <Form
        onSubmit={handleClick}
        className=" home--form d-flex justify-content-around"
      >
        <Form.Control
          required
          type="text"
          placeholder="food name"
          onChange={(e) => setFood(e.target.value)}
          className=" home--input"
        />
        <button onClick={handleClick} className=" home--button" type="submit">
          Search
        </button>
        <select
          onChange={(e) => setMealType(e.target.value)}
          className=" home--select"
        >
          <option value="defaultValue" selected disabled>
            Please select meal
          </option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="tea time">Tea Time</option>
          <option value="snack">Snack</option>
        </select>
      </Form>

      {products.length === 0 && (
        <div>
          <img src={homeSvg} alt="" />
        </div>
      )}

      <div className="homecards row">
        {products.map((item, index) => {
          return <Cards {...item} key="index" />;
        })}
      </div>
    </div>
  );
};

export default Home;
