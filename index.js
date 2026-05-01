const express = require("express");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Sample User Data
let users = [
    {
        id: 1,
        name: "John Doe",
        email: "john@email.com"
    }
];

// Home Route
app.get("/", (req, res) => {
    res.send("Server Running");
});

// GET /users
app.get("/users", (req, res) => {
    res.json(users);
});

// POST /users
app.post("/users", (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };

    users.push(newUser);

    res.json({
        message: "User Added",
        user: newUser
    });
});

// DELETE /users/:id
app.delete("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);

    users = users.filter(user => user.id !== id);

    res.json({
        message: "User Deleted"
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
