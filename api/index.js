const express = require("express")
const cors = require("cors")
const cardsData = require("./data/card.json")

const app = express()

app.use(cors())

function getCard() {
  const card = cardsData.map((card) => {
    return { ...card }
  })
  // const card = cardsData[cardIndex]
  return card
}

app.get("/card", (req, res) => {
  res.json(getCard())
})
// app.get("/card-delayed", (req, res) => {
//   setTimeout(() => {
//     res.json(getCard())
//   }, 3500)
// })

const port = process.env.PORT || 4001
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
