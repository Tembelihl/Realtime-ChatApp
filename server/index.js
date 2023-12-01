const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoute")
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5006;
const uri = process.env.ATLAS_URI;

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoute);

app.get("/", (req, res) =>{
    res.send("Wecome to my chatapp API..");
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connection established"))
  .catch((error) => console.error("MongoDB connection failed:", error.message));


mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});



