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
const updateTask = (req, res) => {
  res.send('update task');
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
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
