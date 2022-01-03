var express = require('express');
var app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

//middleware
app.use(express.json());

//routes
app.get('/hello', (req, res) => {
  res.send('Task Manager App');
});

app.use('/api/v1/tasks', tasks);

/* app.get('/api/v1/tasks') - get all tasks
app.post('/api/v1/tasks') - create a new task
app.get('/api/v1/tasks/:id') - get a single task
app.patch('/api/v1/tasks/:id') - update a task
app.delete('/api/v1/tasks/:id') - delete a task
 */

const port = 4000;

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
