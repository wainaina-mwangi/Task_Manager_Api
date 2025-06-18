const express =  require('express'); 
const mongoose = require('mongoose');
const taskRoutes = require('./routes');
// const Task = require('./task');

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// MongoDB connection URI
const MONGO_URI = 'mongodb://localhost:27017/taskdb'; 

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('MongoDB connection error:', err);
});

// use task routes
app.use('/', taskRoutes);

// Example route
app.get('/', (req, res) => {
    res.send('Hello from Express and MongoDB!');
});

// Start server
app.listen(PORT, () => {
    console.log(` Server is running on http://localhost:${PORT}`);
});
