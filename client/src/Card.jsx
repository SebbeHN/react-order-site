export default function Card({ card, addToCart, removeFromCart }) {
  const { name, images } = card

  return <div>
      <p>{name}</p>
      <img src={images.small} />
      <button onClick={() => addToCart(name)}>Add to cart</button>
      <button onClick={() => removeFromCart(name)}>Remove from cart</button>
  </div>
}
