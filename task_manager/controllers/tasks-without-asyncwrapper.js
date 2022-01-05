const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({}); //mongoose method
    res.status(201).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
  // res.send('All Tasks');
};
const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params; // note: taskId is an alias of id
    const task = await Task.findOne({ _id: taskID }); //mongoose method
    if (!task) {
      return res.status(404).json({ msg: `No task with the id ${taskID}` });
    }
    // res.status(200).json({ task ,amount:tasks.length});
    // res.status(200).json({ status: 'success', task ,amount:tasks.length});
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
  //res.json({ id: req.params });
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body); //mongoose method
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const deleteTask = async (req, res) => {
  try {
    //destructure the id to delete from params
    //find the task to delete
    //if no task found return message
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `no item with the id ${taskID}` });
    }
    res.status(201).json({ task });
    //you can also say res.status(201).send()
    //res.status(201).json({ task: null, status: 'success' });
  } catch (error) {
    res.status(500).json(error);
  }
};
const updateTask = async (req, res) => {
  //async function
  //always add try catch for async func
  //get the task id to change
  //get the body that will be changed
  //update the task using the model methods
  //after updating add the options as the third parameter pass in new:true, runValidators:true

  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
      // overwrite:true - for PUT METHOD
    });

    if (!task) {
      res.status(404).json({ msg: `No task with id :  ${taskID}` });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
