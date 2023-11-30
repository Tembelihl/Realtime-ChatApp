const express = require("express")
const cors = require("cors")


const app = express()
require("dotenv").config()

app.use(express.json())
app.use(cors())

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

app.listen(port, (req, res) =>{
console.log(`Server running on port...: ${port}`);
})

