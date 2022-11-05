import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import defaultImage from "../../assets/default-image.jpg";

const Cards = ({ recipe }) => {
  const navigate = useNavigate();
  const { label, image, calories, ingredientLines, totalTime, totalWeight } =
    recipe;

  const locationInfo = {
    label,
    image,
    calories,
    ingredientLines,
    totalTime,
    totalWeight,
  };

  return (
    <Card className="card" style={{ width: "18rem" }}>
      <Card.Title className="text-truncate">{label}</Card.Title>

      <Card.Img src={image || defaultImage} />
      <Card.Body>
        <Button
          variant="danger"
          onClick={() => navigate(`/detail/${label}`, { state: locationInfo })}
        >
          Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Cards;
