const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3000;
const app = express();
app.use(cors())
app.use(bodyParser({ limit: '50mb' }))

require('./server/routes')(app);

app.listen(PORT, () => console.log(`server is listening on ${PORT}`))