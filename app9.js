
const express = require("express");
const app = express();

app.use(express.json());

let products = [
    { id: 1, name: "Laptop", price: 50000, description: "HP Laptop" },
    { id: 2, name: "Mobile", price: 20000, description: "Samsung Mobile" }
];

// GET - Display all products
app.get("/products", (req, res) => {
    res.json(products);
});

// GET - Display single product
app.get("/products/:id", (req, res) => {
    let product = products.find(p => p.id == req.params.id);
    res.json(product || { message: "Product not found" });
});

// POST - Add product
app.post("/products", (req, res) => {
    products.push(req.body);
    res.json({ message: "Product added", products });
});

// PUT - Update product
app.put("/products/:id", (req, res) => {
    let index = products.findIndex(p => p.id == req.params.id);

    if (index === -1) {
        return res.status(404).json({ message: "Not found" });
    }

    products[index] = { ...products[index], ...req.body };
    res.json(products[index]);
});

// DELETE - Delete product
app.delete("/products/:id", (req, res) => {
    products = products.filter(p => p.id != req.params.id);
    res.json({ message: "Product deleted" });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
