const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the "images" directory
app.use('/images', express.static(path.join(__dirname, 'images')));

// Define routes to serve HTML templates
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'login.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'signup.html'));
});

app.get('/cart', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'shopping-cart.html'));
});

app.get('/checkout', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'checkout.html'));
});

app.get('/search', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'search-results.html'));
});

// Generic category route
app.get('/category/:categoryName', (req, res) => {
    // In a real app, you would use req.params.categoryName to fetch data
    // For now, we serve the same static file for all categories as requested
    res.sendFile(path.join(__dirname, 'templates', 'category-electronics.html'));
});

// Generic product route
app.get('/product/:id', (req, res) => {
    // In a real app, you would use req.params.id to fetch data
    res.sendFile(path.join(__dirname, 'templates', 'product-details.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

