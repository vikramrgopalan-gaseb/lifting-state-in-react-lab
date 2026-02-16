// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (props) => {
  return <ul className="burger-stack">
      {props.stack.length === 0 ?  (
        <p>No Ingredients</p>
      ) :
      (
        props.stack.map((ingredient, index) => (
          <li 
            key={index} 
            style={{ backgroundColor: ingredient.color }}
          >
            {ingredient.name}
            {/* Remove Button */}
            <button onClick={() => props.removeFromBurger(index)}>X</button>
          </li>
        ))
      )}</ul>;
};

export default BurgerStack;
