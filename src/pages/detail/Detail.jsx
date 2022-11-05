import React from "react";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();
  const { state: food } = useLocation();

  console.log("food", food);
  return (
    <div className="detail">
      <div className="detdiv ">
        <div>
          <img src={food.image} alt="" />
        </div>
        <div>
          <h3>How to do</h3>
          <ol>
            {food.ingredientLines.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ol>
          <Button
            type="button"
            className="btn btn-danger"
            onClick={() => navigate(-1)}
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
