import Header from "./components/Header/Header"
import "./App.css"
import ItemList from "./components/ItemList/itemList"
import PagePagination from "./components/Pagination/PagePagination"
import { useState, useEffect } from "react"
import { Fetch_URL } from "./settings/Settings.js"

function App() {
  const [cards, setCards] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const itemsPerpage = 8
  const [totalItems, setTotalItems] = useState(0)

  // fetch data from API
  useEffect(() => {
    fetchData(currentPage)
  }, [currentPage])

  async function fetchData(page) {
    setLoading(true)
    const offset = (page - 1) * itemsPerpage
    try {
      const res = await fetch(Fetch_URL + `?offset=${offset}&limit=${itemsPerpage}`)
      const cards = await res.json()
      setCards(cards)
      setTotalItems(40)
    } catch (error) {
      console.error(error.message)
    }
    setLoading(false)
  }

  // on  click events
  const handleChangePage = (e, value) => setCurrentPage(value)
  const totalPages = Math.ceil(totalItems / itemsPerpage)
  return (
    <div className='App'>
      <Header />
      {loading ? <p>Loading...</p> : <ItemList cards={cards} />}

      <PagePagination
        count={totalPages}
        onChange={handleChangePage}
        page={currentPage}
      />
    </div>
  )
}

export default App
