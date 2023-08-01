// Create web server

// Import express
const express = require('express');

// Import controller
const controller = require('../controllers/comment.controller');

// Create router
const router = express.Router();

// Handle get request to /comments
router.get('/', controller.getComments);

// Handle post request to /comments
router.post('/', controller.postComment);

// Export module
module.exports = router;