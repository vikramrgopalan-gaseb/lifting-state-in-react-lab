// src/components/IngredientList/IngredientList.jsx

const IngredientList = (props) => {
  return <ul className="ingredient-list">
     {props.ingredients.map((ingredient, index) => (
        <li 
          key={index} 
          style={{ backgroundColor: ingredient.color }}
        >
          {ingredient.name}
          {/* Add Button */}
          <button onClick={() => props.addToBurger(ingredient)}>+</button>
        </li>
      ))}</ul>;
};

export default IngredientList;
