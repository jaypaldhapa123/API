const express = require('express');
const {registerUser,fetchUsers} = require('../controllers/authControllers');
const checkAPIkey = require('../middleware/checkAPIkey');
const router = express.Router();

router.post("/auth/register",registerUser);
router.get("/auth/fetchUsers",checkAPIkey,fetchUsers);

module.exports = router;