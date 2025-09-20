const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const morgan = require('morgan');
require('dotenv').config();

const supplierRoutes = require('./routes/supplierRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// MongoDB connect
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✔ MongoDB connected'))
    .catch(err => console.error('✘ Mongo error:', err.message));

// Routes
app.get('/', (req, res) => res.render('index'));
app.use('/suppliers', supplierRoutes);
app.use('/products', productRoutes);

// Simple error handler
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).render('error', { error: err.message || 'Server error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✔ Server running on http://localhost:${PORT}`));