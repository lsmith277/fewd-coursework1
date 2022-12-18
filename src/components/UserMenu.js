import React from 'react';
import { userMenuData } from "../data/userMenuData";
import { UserMenuCard } from "./UserMenuCard.js";

export const UserMenu = ({ open, onClose }) => {
    if (!open) return null;
    return (
        <div onClick={onClose} className="shoppingList-overlay">
            <div onClick={(e) => { e.stopPropagation(); }} className="shoppingList-container">
                <h4>Personal Menu</h4>
                <div className="modalRight">
                    <p className="shoppingList-closeBtn" onClick={onClose}>X</p>
                    <div className="shoppingList-content">
                        {userMenuData.map((item, index) => {
                            console.log(userMenuData);
                            return <UserMenuCard
                                    key={index}
                                    {...item}
                                    />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}