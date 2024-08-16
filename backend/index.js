const express = require('express');
const mailRouter = require('./routes/sendMail.Routes')

const app = express();
const PORT = 8000

app.use(express.json())
app.use(mailRouter)

app.get("/", (req, res) => {
    res.send('hello world')
})

app.listen(PORT, ()=>{
    console.log(`Server started at port ${PORT}`)
})