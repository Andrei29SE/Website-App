import Cart from "../Cart/Cart"
import Search from "../Search/Search"
import styles from "./Header.module.css"

function Header() {
  return (
    <div className={styles.header}>
      <Search />
      <Cart />
    </div>
  )
}

export default Header
