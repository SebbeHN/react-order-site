export default function Card({ card, addToCart }) {
  const { name, images } = card

  return <div>
      <p>{name}</p>
      <img src={images.small} />
      <button onClick={() => addToCart(name)}>Add to cart</button>
  </div>
}
