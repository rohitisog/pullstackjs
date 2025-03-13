import express from "express"
import "dotenv/config"
import db from "./utils/db.js";

const app = express()
const port = process.env.PORT || 4000;


app.get('/', (req, res) => {
  res.send('Hello World!')
})

db();
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})