import { useState } from "react"
import Card from "./Card.jsx"
import data from "../public/data.js"

export default function App() {
  const cards = data

  const [cart, setCart] = useState([])

  function addToCart(name) {
    setCart([...cart, name])
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
              (item, index) => <p key={item + "-" + index}>{item}</p>
            )
        }
      </section>
    </div>
  </>
}
