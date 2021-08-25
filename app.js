const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  console.log("Hello");
  setTimeout(() => { res.send('Hello World!'); }, 2000);

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
