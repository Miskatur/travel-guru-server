const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())

const location = require("./data/location.json")
const info = require("./data/info.json")

app.get('/', (req, res) => {
    res.send("Hotel API running")
})

app.get('/location', (req, res) => {
    res.send(location)
})

app.get('/location/:id', (req, res) => {
    const id = req.params.id
    const location_details = location.filter(l => l.id == id)
    res.send(location_details)
})


app.get('/hotel', (req, res) => {
    res.send(info)
})

app.get('/hotel/:id', (req, res) => {
    const id = req.params.id;
    const selected_hotels = info.find(s => s.id == id)
    res.send(selected_hotels)
})















app.listen(port, () => {
    console.log("Hotel Server running on Port : ", port);
})