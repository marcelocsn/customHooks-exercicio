import "./style.css";
import { useState } from "react";

export const Item = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div id="item">
      <div>
        <span>{props.label}</span>
      </div>
      <div>
        <div>
          <span>{`Quantidade: ${props.quantity}`}</span>
          <button onClick={props.onDecrement}>-</button>
          <button onClick={props.onReset}>Restaurar</button>
          <button onClick={props.onIncrement}>+</button>
        </div>
        <div>
          <input
            onChange={handleChange}
            value={inputValue}
            placeholder="Digitar quantidade"
          />
          <button onClick={() => props.set(inputValue)}>Confirmar valor</button>
        </div>
      </div>
    </div>
  );
};
