const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Routes
app.post('/api/login', (req, res) => {
    // Authentication logic here
});

app.post('/api/signup', (req, res) => {
    // User registration logic here
});

app.post('/api/add-device', (req, res) => {
    // Logic to add new device by admin
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on :http/localhost: ${PORT}`);
});
