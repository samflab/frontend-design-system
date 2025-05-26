const express = require('express');
const app = express();

const data = 'initial data';

const waitingClients = []

app.get('/', (req, res) => {
    res.sendFile(__dirname+ "/index.html");
});

app.get('/getData', (req, res) => {
    if(data !== req.query.lastData){
        res.json({data});
    } else {
        // hold the request 
        waitingClients.push(res);
    }
   
})

app.post('/updateData', (req, res) => {
    data = req.query.data;

    while(waitingClients.length > 0){
        const client = waitingClients.pop();

        client.json({data});
    }

    res.send({success: "newdata"})
});


const port = process.env.PORT || 5012
app.listen(port, (req, res) => {
    console.log("Server is running at ", port);
})