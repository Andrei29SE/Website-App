import { createContext } from "react"

const SearchContext = createContext({
  value: "",
  setValue: () => {},
})

export default SearchContext
