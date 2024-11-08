import ItemCard from "../ItemCard/ItemCard"
import SearchContext from "../Search/SearchContext"
import styles from "./ItemList.module.css"
import { useContext } from "react"

function ItemList(props) {
  const { cards } = props
  //search logic
  const value = useContext(SearchContext)
  const filteredCards = cards.filter((card) => {
    return card.title.toLowerCase().includes(value.value.toLocaleLowerCase())
  })

  return (
    <div className={styles.itemList}>
      {filteredCards?.map((card) => {
        return <ItemCard key={card.id} {...card} />
      })}
    </div>
  )
}
export default ItemList
