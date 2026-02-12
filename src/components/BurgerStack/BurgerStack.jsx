// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (props) => {
  return <ul className="burger-stack">
    
     if ( {props.stack.length === 0 ) (
        <p>No Ingredients</p>
      )
      
      else (
        props.stack.map((ingredient, index) => (
          <li 
            key={index} 
            style={{ backgroundColor: ingredient.color }}
          >
            {ingredient.name}
            {/* Button to trigger removeFromBurger in App.jsx */}
            <button onClick={() => props.removeFromBurger(index)}>X</button>
          </li>
        ))
      )}</ul>;
};

export default BurgerStack;
