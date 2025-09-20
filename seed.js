require('dotenv').config();
const mongoose = require('mongoose');
const Supplier = require('./models/Supplier');
const Product = require('./models/Product');

(async() => {
    await mongoose.connect(process.env.MONGO_URI);
    await Supplier.deleteMany({});
    await Product.deleteMany({});

    const s1 = await Supplier.create({ name: 'ACME Co.', address: '123 Main', phone: '0123456789' });
    const s2 = await Supplier.create({ name: 'Omega Ltd.', address: '456 Side', phone: '0987654321' });

    await Product.create([
        { name: 'Pen', price: 1.2, quantity: 100, supplierId: s1._id },
        { name: 'Book', price: 3.5, quantity: 40, supplierId: s2._id },
        { name: 'Notebook', price: 2.0, quantity: 80, supplierId: s1._id },
        { name: 'Pencil', price: 0.8, quantity: 200, supplierId: s2._id },
        { name: 'Eraser', price: 0.5, quantity: 150, supplierId: s1._id },
        { name: 'Ruler', price: 1.0, quantity: 120, supplierId: s2._id }
    ]);

    console.log('✔ Seeded 7 products and 2 suppliers!');
    await mongoose.disconnect();
})();