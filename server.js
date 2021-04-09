const express = require('express');
const cors = require('cors');

const dateRoutes = require('./routes/date');
const homeRoutes = require('./routes/home');

const app = express();
 
app.use(cors({optionsSuccessStatus: 200}));
app.use(express.static('public'));

app.use('/api/timestamp', dateRoutes);
app.use(homeRoutes);

// listen for requests :)
app.listen(process.env.PORT || 64512, () => {
  console.log("listening");
});
