import Header from "./components/Header/Header"
import "./App.css"
import ItemList from "./components/ItemList/itemList"
import PagePagination from "./components/Pagination/PagePagination"

function App() {
  return (
    <div className='App'>
      <Header />
      <ItemList />
      <PagePagination />
    </div>
  )
}

export default App
