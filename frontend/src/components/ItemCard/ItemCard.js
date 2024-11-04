import styles from "./ItemCard.module.css"
import { useState } from "react"
import ModalWindow from "../ModaWindow/ModalWindow"

function ItemCard(props) {
  const { title, price, images } = props
  // increas/decrease amount of goods
  const [count, setCount] = useState(1)
  const handleOndInrease = () => {
    return setCount(count + 1)
  }
  const handleOndecDecrease = () => {
    if (!!count) {
      return setCount(count - 1)
    }
  }

  return (
    <div className={styles.itemCard}>
      <p>{title}</p>
      <img className='' alt='item-image' src={images} />
      <p>Price: {price} $</p>
      <div className={styles.buttonGrpoup}>
        <button onClick={handleOndInrease} className={styles.addButton}>
          +
        </button>
        <div className={styles.count}>{count}</div>

        <button
          onClick={handleOndecDecrease}
          disabled={count === 1 && true}
          className={styles.addButton}>
          -
        </button>
        <button className={styles.cartButton}>Add to cart</button>
        <ModalWindow />
      </div>
    </div>
  )
}

export default ItemCard
