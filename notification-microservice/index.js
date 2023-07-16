const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const Todo = require('../todos-microservice/models/todo');

// Connect to MongoDB
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });

// Create Express app
const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.post('/notifications', async (req, res) => {
  try {
    const { todoId } = req.body;
    const todo = await Todo.findById(todoId);
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    // Implement your notification logic here using the `sendNotification()` method.
    sendNotification(todo);
    res.json({ message: 'Notification sent' });
  } catch (error) {
    console.error('Failed to send notification:', error);
    res.status(500).json({ error: 'Failed to send notification' });
  }
});

// Mock sendNotification function
function sendNotification(todo) {
  // Implement your actual notification logic here
  // This is a placeholder implementation
  console.log(`Sending notification for todo: ${todo.title}`);
}

// Start the server
const port = config.port || 4000;
app.listen(port, () => {
  console.log(`Notification Microservice running on port ${port}`);
});
