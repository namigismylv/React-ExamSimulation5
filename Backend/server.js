const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

require("dotenv").config();
app.use(cors());
app.use(express.json());
const modaSchema = mongoose.Schema({
  image: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  desc: {
    type: String,
    require: true,
  },
});
const moda = mongoose.model("moda", modaSchema);
app.get("/moda", async (req, res) => {
  const target = await moda.find();
  res.send(target);
});
app.get("/moda/:id", async (req, res) => {
  const { id } = req.params 
  const target = await moda.findById(id);
  res.send(target);
});
app.post("/moda", async (req, res) => {
  const { image, title, desc } = req.body;
  const newModa = new moda({ image: image, title: title, desc: desc });
  await newModa.save();
  const target = await moda.find();
  res.send(target);
});
app.delete("/moda/:id", async (req, res) => {
  const { id } = req.params;
  await moda.findByIdAndDelete(id);
  const target = await moda.find();
  res.send(target);
});

mongoose.connect(process.env.CS).then((res) => {
  console.log("db connected");
});
app.listen(process.env.PORT, (req, res) => {
  console.log("bu server işləyir");
});
