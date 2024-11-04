import Header from "./components/Header/Header"
import "./App.css"
import ItemList from "./components/ItemList/itemList"
import PagePagination from "./components/Pagination/PagePagination"
import { useState, useEffect } from "react"
import { Fetch_URL } from "./settings/Settings.js"

function App() {
  const [error, setError] = useState("")
  const [cards, setCards] = useState([])
  const [offset, setOffset] = useState(0)
  const limit = 10

  const handleOnPaginationClick = () => {
    setOffset(offset + limit)
  }

  // fetch data from API
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(Fetch_URL + `?offset=${offset}&limit=${limit}`)
        const cards = await res.json()
        console.log(cards)
        setCards(cards)
      } catch (error) {
        setError(error.message)
      }
    }
    fetchData()
  }, [offset, limit])
  return (
    <div className='App'>
      <Header />
      <ItemList cards={cards} error={error} />
      <PagePagination
        count={limit}
        page={offset}
        onChange={handleOnPaginationClick}
      />
    </div>
  )
}

export default App
