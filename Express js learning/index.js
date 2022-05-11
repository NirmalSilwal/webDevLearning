const express = require('express');
const path = require('path');

const app = express();

// app.get('/', (req, res) => {
    // res.send('<h1>Hello world!!</h1>')
    // res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

 // use static folder
 app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`server running in port ${PORT}...`));