const cors = require('cors');
const express = require('express');
const port = 8000;
const app = express();
require('./server/config/mongoose.config');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./server/routes/product.routes')(app);
app.listen(port, () => {
  console.log(`
  ==============================
    listening on port ${port}
  ==============================
  `)
});
