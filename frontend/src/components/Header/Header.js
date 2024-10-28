import Cart from "./Cart"
import styles from "./Header.module.css"
function Header() {
  return (
    <div className={styles.header}>
      <Cart />
    </div>
  )
}

export default Header
