import Cart from "./Cart"
import styles from "./Header.module.css"

function Header() {
  return (
    <div className={styles.header}>
      <label>Search: </label>
      <input></input>
      <Cart className={styles.cart} />
    </div>
  )
}

export default Header
