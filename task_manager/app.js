var express = require('express');
var app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
require('dotenv').config();

//middleware
app.use(express.static('./public'));
app.use(express.json());

//routes
//app.use(notFound); //route not found ********-----BUG*************
app.use('/api/v1/tasks', tasks);

//error handling middleware
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 4000;
//to set the port in the console
//stop server, write PORT=7000 node app.js

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log('CONNECTED TO DB...');
    app.listen(port, console.log(`App listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
