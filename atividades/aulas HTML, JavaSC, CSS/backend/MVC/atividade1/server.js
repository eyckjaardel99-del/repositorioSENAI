const express = require("express");
const cors = require("cors");
const router = express.Router();

const routes = require("./src/controllers/routes")

const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.use(routes)

const porta = 3000;

app.listen(porta, ()=>{
    console.log(`servidor: http://localhost:${porta}`)
})