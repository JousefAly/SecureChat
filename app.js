const express = require('express');
const messagesRouter = require('./routes/messages');

const port = process.env.PORT || 4000;
const app = new express();

app.use('/messages', messagesRouter);


app.listen(port, () => {
    console.log('App listening on port ', port);
})