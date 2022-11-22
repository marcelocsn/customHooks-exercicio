//import { useState } from "react";
import { Item } from "../Item/Item";
import { useCounter } from "../../hooks/useCounter";

export const Cart = () => {
  //const [quantity, setQuantity] = useState(0);
  const quantity = useCounter({ min: 0, max: 10, initial: 0 }, 2);

  return (
    <div className="Cart">
      <h1>Meu carrinho</h1>
      <Item
        label="My produto massa"
        quantity={quantity.value}
        onIncrement={quantity.increment}
        onDecrement={quantity.decrement}
        onReset={quantity.reset}
        set={quantity.set}
      />
      {/* <Item
        label="My produto massa"
        quantity={quantity}
        onIncrement={() => setQuantity((q) => q + 1)}
        onDecrement={() => setQuantity((q) => q - 1)}
        onReset={() => setQuantity(0)}
      /> */}
    </div>
  );
};
