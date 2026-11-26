
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

let products = [
    { id: 1, name: "Laptop", price: 50000, rating: 4.5 },
    { id: 2, name: "Mobile", price: 20000, rating: 4.2 }
];

// API to get products
app.get("/api/products", (req, res) => {
    res.json(products);
});

// API to add products
app.post("/api/products", (req, res) => {
    let product = {
        id: Date.now(),
        name: req.body.name,
        price: Number(req.body.price),
        rating: Number(req.body.rating)
    };

    products.push(product);
    res.status(201).json(product);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
