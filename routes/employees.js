const express = require("express");
const router = express.Router();

// get all employees
router.get("/emp/employees", (req, res) => {
    res.send({
        "employee_id" : req.params.eid, 
        "first_name" : req.params.first_name,
        "last_name" : req.params.last_name,
        "email" : req.params.email,
        "position" : req.params.position,
        "salary" : req.params.salary,
        "date_of_joining" : req.params.date_of_joining,
        "department" : req.params.department})
})

// create employee
router.post("/emp/employees", (req, res) => {
    res.send({"message": "Employee successfully created."})
})

// Get employee information by id
router.get("/emp/employees/:eid", (req, res) => {
    res.send({"message" : "Employee successfully found."})
})

// update employee by id
router.put("/emp/employees/:eid", (req, res) => {
    res.send({"message" : "Employee details updated successfully."});
})

// delete employee by id
router.delete("/emp/employees?eid=:eid", (req, res) => {
    res.send({"message" : "Employee deleted successfully."});
})
module.exports = router;