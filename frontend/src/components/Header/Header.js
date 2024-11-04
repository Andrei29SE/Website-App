import Cart from "../Cart/Cart"
import styles from "./Header.module.css"

function Header() {
  return (
    <div className={styles.header}>
      <label>Search: </label>
      <input></input>
      <Cart />
    </div>
  )
}

export default Header
