const express = require("express");

const app = new express();

app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded());


app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post('/', (req, res) => {
    console.log(req.body);
})

app.listen(3000, () => {
    console.log("Funcionando");
})