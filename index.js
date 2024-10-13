const express = require('express');
const app = express();
const SERVER_PORT = process.env.port || 3000;
const userRoutes = require("./routes/users");
const employeeRoutes = require("./routes/employees");

app.use(express.json())
app.use(express.urlencoded())

app.use("/api/v1", userRoutes);
app.use("/api/v1", employeeRoutes);

// http://localhost:3000/
app.route("/")
    .get((req, res) => {
        res.send("<h1>COMP3123 - Assignment 1</h1>");
    })

// Listen to the server
app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
})