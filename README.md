# Node.js MVC CRUD: Suppliers & Products

Ứng dụng web CRUD đơn giản xây dựng bằng **Node.js, Express, MongoDB, Mongoose, EJS** và giao diện với **Bootstrap 5**.  
Ứng dụng minh họa kiến trúc MVC với 2 thực thể:

- **Suppliers**: name, address, phone  
- **Products**: name, price, quantity, supplierId (tham chiếu tới Supplier)

---

## Tính năng

- Quản lý Suppliers (Thêm, Xem, Sửa, Xóa)
- Quản lý Products (Thêm, Xem, Sửa, Xóa)
- Mỗi Product gắn với một Supplier
- Không thể xóa Supplier nếu còn Product tham chiếu
- Giao diện Bootstrap gọn đẹp

---

## Công nghệ sử dụng

- **Node.js + Express** – Web server & routing  
- **MongoDB + Mongoose** – Database NoSQL  
- **EJS** – View template  
- **Bootstrap 5** – UI styling  

---

## Cấu trúc thư mục

node-mvc-crud-product-supplier/
├── app.js                  
├── package.json            
├── .env                    
├── seed.js                
├── /models                
│   ├── Supplier.js
│   └── Product.js
├── /controllers           
│   ├── supplierController.js
│   └── productController.js
├── /routes                 
│   ├── supplierRoutes.js
│   └── productRoutes.js
├── /views                 
│   ├── index.ejs          
│   ├── /partials           
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── /suppliers          
│   │   ├── index.ejs       
│   │   ├── new.ejs         
│   │   └── edit.ejs       
│   └── /products           
│       ├── index.ejs      
│       ├── new.ejs        
│       └── edit.ejs       
└── /public           
    └── /css
        └── style.css

