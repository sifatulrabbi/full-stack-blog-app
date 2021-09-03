const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const authRoute = require('./routes/auth');
const usersRoute = require('./routes/users');
const postRoute = require('./routes/posts');

const port = 5000;

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.DB_URL)
  .then(console.log('connected to mongo'))
  .catch((err) => console.log(err));

app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/posts', postRoute);

app.listen(port, () => {
  console.log(`server is running at port: ${port}`);
});
