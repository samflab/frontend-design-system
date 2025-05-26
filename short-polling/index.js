const express = require('express');
const app = express();

const data = "initial data"

app.get('/', (req, res) => {
    res.sendFile(__dirname+ '/index.html');
});


app.get('/getData', (req, res) => {
    res.send({
        data: data
    })
});

app.post('/updateData', (req, res) => {
    res.send({
        data: "Updated data"
    })
})

const port = process.env.PORT || 5011
app.listen(port, (req, res) => {
    console.log("Server is running on port "+ port)
})