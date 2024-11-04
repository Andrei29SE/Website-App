import ItemCard from "../ItemCard/ItemCard"
import styles from "./ItemList.module.css"

function ItemList(props) {
  const { cards, error } = props
  if (error) {
    return <h1>Error: {error}</h1>
  }
  return (
    <div className={styles.itemList}>
      {cards?.map((card) => {
        return <ItemCard key={card.id} {...card} />
      })}
    </div>
  )
}
export default ItemList
