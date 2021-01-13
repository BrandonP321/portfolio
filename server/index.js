const express = require('express')
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 5000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// test route
app.post('/message/send', (req, res) => {
    console.log(req.body)
    res.status(200).send('message sent').end();
})

app.listen(PORT, () => {
    console.log('server listening on port ' + PORT)
})