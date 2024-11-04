import ItemCard from "../ItemCard/ItemCard"
import styles from "./ItemList.module.css"
import { useEffect, useState } from "react"
import { Fetch_URL } from "../../settings/Settings.js"

function ItemList() {
  const [error, setError] = useState("")
  const [cards, setCards] = useState([])

  // fetch data from API

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(Fetch_URL)
        const cards = await res.json()
        setCards(cards)
      } catch (error) {
        setError(error.message)
      }
    }
    fetchData()
  }, [])

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
