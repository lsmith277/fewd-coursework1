import { userMenuData } from "../data/userMenuData";

export const UserMenuCard = ({ id, name, description, ingredients, category, imgUrl }) => {

    const handleRemoveFromMenu = (e, id) => {
        let index = userMenuData.indexOf(id);
        userMenuData.splice(index, 1);
      }

    return (
        <div className="userMenuCard-container">
            
            <div className="userMenuCard-content">
            <h5>{name}</h5>
            <p>{description}</p>
            <button className="userMenuCard-btn" onClick={(e) => {handleRemoveFromMenu(e, id)}}>Remove</button>
            </div>
        </div>
    )
}