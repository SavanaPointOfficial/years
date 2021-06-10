const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const app = express();


app.use(express.json());
app.use(cors());
app.use('/api',routes);

const port = process.env.PORT || 2812;

app.listen(port, () => console.log(`Your server is running on http://localhost:${port}`))