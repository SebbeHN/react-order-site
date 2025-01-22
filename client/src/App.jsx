import { useState } from "react"
import Card from "./Card.jsx"
import data from "../public/data.js"

export default function App() {
  const cards = data

  const [cart, setCart] = useState([])

  function addToCart(name) {
    const itemIndex = cart.findIndex(item => item.name === name);
    if (itemIndex === -1) {
      setCart([...cart, { name, amount: 1 }]);
    } else {
      const tempCart = [...cart];
      tempCart[itemIndex].amount += 1;
      setCart(tempCart);
    }
  }

  function removeFromCart(name) {
    const itemIndex = cart.findIndex(item => item.name === name);
    
    if (itemIndex === -1) {
      alert(name + " is not in cart");
      return;
    }
  
    const tempCart = [...cart];
    
    if (tempCart[itemIndex].amount > 1) {
      tempCart[itemIndex].amount -= 1;
    } else {
      tempCart.splice(itemIndex, 1);
    }
  
    setCart(tempCart);
  }
  
  
  return <>
    <h1>PTC Seller</h1>
    <div id="homepage">
      <section id="cardList">
        {
          cards.map(
            (card, index) => <Card
              key={card.name + "-" + index}
              card={card}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          )
        }

      </section>

      <section id="cart">
        {
          // vilkor ? true : false
          /*
          const list = ["Linus", "Bengt", "Sandra"]
    
          for(let i = 0; i < list.length; i++) {
            console.log(list[i])
          }
    
          for-loop -> i, list[i] 
          map -> index, item
          */
          cart.length == 0 ?
            <p>Cart is empty</p>
            :
            cart.map(
              (item, index) => <p key={item + "-" + index}>{item.name}, {item.amount}</p>
            )
        }
      </section>
    </div>
  </>
}
