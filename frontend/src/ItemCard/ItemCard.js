import styles from "./ItemCard.module.css"
import Button from "react-bootstrap/Button"
import ButtonGroup from "react-bootstrap/ButtonGroup"

function ItemCard(props) {
  const { title, price, type } = props
  return (
    <div className={styles.itemCard}>
      <h3>{title}</h3>
      <img className='' alt='SMTH' scr='/src/photos/Tomato.jpeg' />
      <p className={styles.discription}>{type}</p>
      <div className={styles.buttonGrpoup}>
        <h4>Price: {price}</h4>
        <ButtonGroup aria-label='Basic example'>
          <Button variant='primary'>+</Button>
          <Button variant='primary'>-</Button>
          <Button variant='success'>Add to cart</Button>
        </ButtonGroup>
      </div>
    </div>
  )
}

export default ItemCard
