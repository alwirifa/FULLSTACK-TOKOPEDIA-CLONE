// routes/products.js
const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const authenticate = require('../middleware/auth');  // Import middleware

// Middleware ini akan diterapkan untuk semua rute di bawah ini
router.use(authenticate);

// Create Product
router.post('/', async (req, res) => {
  try {
    const product = await Product.create({
      ...req.body,
      user: req.user._id // Set the user ID for the product
    });
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to create product' });
  }
});

// Read Products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find({ user: req.user._id });
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Update Product
router.put('/:id', async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      req.body,
      { new: true }
    );
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to update product' });
  }
});

// Delete Product
router.delete('/:id', async (req, res) => {
  try {
    await Product.findOneAndDelete({ _id: req.params.id, user: req.user._id });
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

module.exports = router;