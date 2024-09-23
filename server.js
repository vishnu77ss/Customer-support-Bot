const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Initialize Express app
const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/chatbotDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema and model for storing customer queries and responses
const querySchema = new mongoose.Schema({
    question: String,
    response: String
});

const Query = mongoose.model('Query', querySchema);

// API route to handle chatbot requests
app.post('/chatbot', async (req, res) => {
    const userInput = req.body.input.toLowerCase();
    let output = "";

    // Check the database for a matching question
    const foundQuery = await Query.findOne({ question: userInput });
    
    if (foundQuery) {
        output = foundQuery.response;
    } else {
        // Default response if no match found in the database
        output = "I'm sorry, I didn't understand that. Could you try asking in a different way?";
    }

    res.json({ output });
});

// Seed the database with common questions
app.get('/seed', async (req, res) => {
    const queries = [
        { question: "hello", response: "Hello, how can I assist you today?" },
        { question: "order status", response: "Please provide your order ID, and I will help you track your order." },
        { question: "return policy", response: "You can return products within 30 days of purchase. Visit our Returns page for more details." },
        { question: "shipping time", response: "Standard shipping takes 5-7 business days." },
        { question: "payment methods", response: "We accept credit cards, debit cards, PayPal, and more." },
        { question: "refund policy", response: "Refunds are processed within 5-7 business days after the item is received." },
        { question: "technical support", response: "Please provide details about the issue and our support team will assist you." }
    ];
    
    await Query.insertMany(queries);
    res.send("Database seeded with common questions.");
});

// Start the server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
