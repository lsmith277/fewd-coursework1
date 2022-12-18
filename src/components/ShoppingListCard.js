import { shoppingListData } from "../data/shoppingListData";

export const ShoppingListCard = ({ ingredient }) => {
    const handleRemoveFromShoppingList = (e, id) => {
        let index = shoppingListData.indexOf(id);
        shoppingListData.splice(index, 1);
      }
    return (
        <div className="shoppingListCard-container">
            
            <div className="shoppingListCard-content">
            <h5>{ingredient}</h5>
            <button className="userMenuCard-btn" onClick={(e) => {handleRemoveFromShoppingList(e, ingredient)}}>Remove</button>
            </div>
        </div>
    )
}