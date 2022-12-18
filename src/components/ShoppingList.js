import React from 'react';
import { shoppingListData } from "../data/shoppingListData";
import { ShoppingListCard } from "./ShoppingListCard.js";

export const ShoppingList = ({ open, onClose }) => {
    if (!open) return null;
    return (
        <div onClick={onClose} className="shoppingList-overlay">
            <div onClick={(e) => { e.stopPropagation(); }} className="shoppingList-container">
                <h4>Shopping List</h4>
                <div className="modalRight">
                    <p className="shoppingList-closeBtn" onClick={onClose}>X</p>
                    <div className="shoppingList-content">
                        {shoppingListData.map((ingredient, index) => {
                            console.log(shoppingListData);
                            return <ShoppingListCard
                                    key={index}
                                    ingredient={ingredient}
                                    />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}