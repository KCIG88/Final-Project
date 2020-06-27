const express = require('express');
const router = express.Router();
const users = require("../models/users");

router.get('/api/name', (req, res) => {
    const data = {
        userName: 'peterson',
        balance: 150.00
    };
    res.json(data);
});

router.get('/api', (req, res) => {
    users.find({})
        .then((data) => {
            console.log('data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log("error:", error);
        });
});





module.exports = router;