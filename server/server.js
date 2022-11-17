const express = require('express');
const PORT = process.env.PORT || 1000;
const path = require('path')


const app = express();
app.use(express.static(path.join(__dirname, '../client/build/')))

app.listen(PORT, () => console.log('SERVER SERVING AT PORT %s', PORT))