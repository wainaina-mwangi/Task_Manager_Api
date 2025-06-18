const task = require('./task');
// const Task = require('./task');
const express = require('express');
const router = express.Router();



// creating a new task 
router.post('/tasks',async (req ,res)=>{
 try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).send(task);
 } catch (error) {
    res.status(400).send(error);
 }
});

// getting all the tasks
router.get('/tasks', async (req,res)=>{
   try {
      const tasks = await Task.find();
      res.send(task);
   } catch (error) {
      res.status(500).send(error);
   }
});

// getting a task by Id
router.get('/tasks/:id', async (req,res)=>{
   try {
      const task = await Task.findById(req.params.id);
      if (!task) return res.status(404).send();
      res.send(task);
   } catch (error) {
      res.status(500).send(error);
   }
});

// updating a Task

router.put('/tasks/:id', async(req,res)=>{
 try {
   const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new:true, runValidators: true}
   );
   if (!task) return res.status(404).send();
      res.send(task);
 } catch (error) {
   res.status(500).send(error);
 }
});

// delete tasks
router.delete('/tasks/:id', async (req,res)=>{
 try {
   const task = await Task.findByIdAndDelete((req.params.id));
   if (!task) return   res.status(404).send();
   res.send(task);
 } catch (error) {
   res.status(500).send(error);
 }
});


module.exports = router();