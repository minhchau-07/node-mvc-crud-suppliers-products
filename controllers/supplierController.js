const Supplier = require('../models/Supplier');
const Product = require('../models/Product');

exports.index = async(req, res, next) => {
    try {
        const suppliers = await Supplier.find().sort({ createdAt: -1 });
        res.render('suppliers/index', { suppliers });
    } catch (e) { next(e); }
};

exports.newForm = (req, res) => res.render('suppliers/new');

exports.create = async(req, res, next) => {
    try {
        await Supplier.create(req.body);
        res.redirect('/suppliers');
    } catch (e) { next(e); }
};

exports.editForm = async(req, res, next) => {
    try {
        const supplier = await Supplier.findById(req.params.id);
        if (!supplier) return res.status(404).render('error', { error: 'Supplier not found' });
        res.render('suppliers/edit', { supplier });
    } catch (e) { next(e); }
};

exports.update = async(req, res, next) => {
    try {
        await Supplier.findByIdAndUpdate(req.params.id, req.body, { runValidators: true });
        res.redirect('/suppliers');
    } catch (e) { next(e); }
};

exports.remove = async(req, res, next) => {
    try {
        const count = await Product.countDocuments({ supplierId: req.params.id });
        if (count > 0) {
            return res.status(400).render('error', { error: 'Không thể xóa: còn sản phẩm tham chiếu nhà cung cấp này.' });
        }
        await Supplier.findByIdAndDelete(req.params.id);
        res.redirect('/suppliers');
    } catch (e) { next(e); }
};