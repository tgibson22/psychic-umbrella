const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Hello Tim \n');
});

app.get('/tim', (req, res) => {
    res.send('Matt \n');
});



app.listen(6000, function () {
    console.log('Server running smooth');

});

