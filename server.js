
const express = require('express')
const app = express()
const port = 80

app.get("*", (req, res, next) => {
console.log(new Date(Date.now()).toString(), req.url, req.method, req.connection.remoteAddress);
next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

