const Product  = require('../models/Product');
const Supplier = require('../models/Supplier');

exports.index = async (req, res, next) => {
  try {
    const products = await Product.find().populate('supplierId').sort({ createdAt: -1 });
    res.render('products/index', { products });
  } catch (e) { next(e); }
};

exports.newForm = async (req, res, next) => {
  try {
    const suppliers = await Supplier.find().sort({ name: 1 });
    res.render('products/new', { suppliers });
  } catch (e) { next(e); }
};

exports.create = async (req, res, next) => {
  try {
    await Product.create(req.body);
    res.redirect('/products');
  } catch (e) { next(e); }
};

exports.editForm = async (req, res, next) => {
  try {
    const [product, suppliers] = await Promise.all([
      Product.findById(req.params.id),
      Supplier.find().sort({ name: 1 })
    ]);
    if (!product) return res.status(404).render('error', { error: 'Product not found' });
    res.render('products/edit', { product, suppliers });
  } catch (e) { next(e); }
};

exports.update = async (req, res, next) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, req.body, { runValidators: true });
    res.redirect('/products');
  } catch (e) { next(e); }
};

exports.remove = async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect('/products');
  } catch (e) { next(e); }
};
