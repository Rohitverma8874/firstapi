const express = require('express');
const app = express();

const userRouter = require('./routers/userRouter');
const videoRouter = require('./routers/videoRouter');
const util = require('./routers/util');

const cors = require('cors');

app.use(cors({ origin: ['http://localhost:3000'] }));
app.use(express.json());

app.use('/user', userRouter);
app.use('/video', videoRouter);
app.use('/util', util);

const port = 5000;

app.get('/', (req, res) => {
    console.log('a request from client');
    res.send('request processed');
})

app.get('/home', (req, res) => {
    console.log('request at home');
    res.send('request processed at home');
})

app.get('/add', (req, res) => {
    console.log('add request at root!');
    res.send('request processed at root');
})

app.listen(port, () => {
    console.log('server successfully started on port ' + port);
});