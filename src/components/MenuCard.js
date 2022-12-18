import { Col } from "react-bootstrap";
import React, { useState } from "react";
import { NutritionalInformation } from './NutritionalInformation.js';
import { userMenuData } from '../data/userMenuData';

export const MenuCard = ({ id, name, description, ingredients, category, imgUrl, rating }) => {
  const [nutrition, setNutrition] = useState(false);

  const item = {
    id: id,
    name: name,
    description: description,
    ingredients: ingredients,
    category: category,
    imgUrl: imgUrl,
    rating: rating,
  }

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="Recipe"/>
        <div className="proj-txtx">
          <h4>{name}</h4>
          <span>{description}</span>
          <br/>
          <span>Ingredients: {ingredients.join(", ")}</span>
          <br/><br/>
          <button onClick={() => {document.body.style.overflow = 'hidden'; document.body.style.height = '100%'; setNutrition(true);}} className="proj-modal-btn">Nutritional Information</button>
        </div>
      </div>
      <NutritionalInformation open={nutrition} onClose={() => setNutrition(false)} item={item}/>
    </Col>
  )
}
