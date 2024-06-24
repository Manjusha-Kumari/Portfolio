const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config({ path: '.env.local' });

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection string
const uri = process.env.MONGODB_URI;

if (!uri) {
    console.error('MONGODB_URI is not defined. Check your .env.local file.');
    process.exit(1);
}

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Failed to connect to MongoDB', err);
});

// Schema and Model
const messageSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const Message = mongoose.model('Message', messageSchema);

// Routes
app.post('/submit', async (req, res) => {
    const { name, email, message } = req.body;

    const newMessage = new Message({
        name,
        email,
        message
    });

    try {
        await newMessage.save();
        res.status(201).send('Message saved');
    } catch (err) {
        res.status(400).send('Failed to save message');
    }
});

app.get('/messages', async (req, res) => {
    try {
        const messages = await Message.find();
        res.status(200).json(messages);
    } catch (err) {
        res.status(400).send('Failed to fetch messages');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
