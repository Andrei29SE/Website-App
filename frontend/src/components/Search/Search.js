import { HiMagnifyingGlass } from "react-icons/hi2"
import { useContext } from "react"
import SearchContext from "../../context/SearchContext"

function Search() {
  const search = useContext(SearchContext)

  return (
    <div>
      <form>
        <HiMagnifyingGlass />
        <input onChange={(e) => search.setValue(e.target.value)}></input>
      </form>
    </div>
  )
}

export default Search
