const express = require('express');
const app = express();
var path = require('path');

app.get('/test', (req, res) => {
        res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080, () => console.log("Server pe 8080"));
