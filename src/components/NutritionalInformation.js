import React from 'react';
import { FetchNutrition } from "./FetchNutrition.js";
import { StarRating } from "./StarRating.js";
import { shoppingListData } from "../data/shoppingListData";
import { userMenuData } from "../data/userMenuData";

export const NutritionalInformation = ({ open, onClose, item }) => {
    if (!open) return null;

    const handleAddToShoppingList = (e, ingredients) => {
        for (let i = 0; i < ingredients.length; i++) {
            shoppingListData.push(ingredients[i]);
            console.log(shoppingListData);
        }
    }

    const handleAddToMenu = (e, item) => {
        userMenuData.push(item);
        console.log(userMenuData);
    }

    return (
        <div onClick={() => { document.body.style.overflow = 'auto'; document.body.style.height = 'auto'; onClose();}} className="nutrition-overlay">
            <div onClick={(e) => { e.stopPropagation(); }} className="nutrition-container">
                <h4 className="nutrition-header">{item.name}</h4>
                <p onClick={() => { document.body.style.overflow = 'auto'; document.body.style.height = 'auto'; onClose();}} className="nutrition-closeBtn">X</p>
                <div className="modalRight">
                    <div className="nutrition-content">
                        <img className="nutrition-image" src={item.imgUrl} alt="Recipe"/>
                        <StarRating item={item}/>
                        <p>Item Description: {item.description}</p>
                        <p>Ingredients: {item.ingredients.join(", ")}</p>
                        <FetchNutrition item={item}/>
                        <button className="nutrition-shoppingList-btn" onClick={(e) => handleAddToShoppingList(e, item.ingredients)}>Add to Shopping List</button>
                        <button className="nutrition-shoppingList-btn" onClick={(e) => handleAddToMenu(e, item)}>Add to Menu</button>
                    </div>
                </div>
            </div>
        </div>
    )
}