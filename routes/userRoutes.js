const express = require('express');
const {registerUser,fetchUsers} = require('../controllers/authControllers');
const router = express.Router();

router.post("/auth/register",registerUser);
router.get("/auth/fetchUsers",fetchUsers);

module.exports = router;