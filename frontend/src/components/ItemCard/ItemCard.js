import styles from "./ItemCard.module.css"
import { useState } from "react"

function ItemCard(props) {
  const { title, price, photo } = props
  // increas/decrease amount of goods
  const [count, setCount] = useState(1)
  const handleOndecInrease = () => {
    return setCount(count + 1)
  }
  const handleOndecDecrease = () => {
    return setCount(count - 1)
  }

  return (
    <div className={styles.itemCard}>
      <h3>{title}</h3>
      <img className='' alt='SMTH' src={photo} />
      <h4>Price: {price}</h4>
      <div className={styles.buttonGrpoup}>
        <button onClick={handleOndecInrease} className={styles.addButton}>
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
      </div>
    </div>
  )
}

export default ItemCard
