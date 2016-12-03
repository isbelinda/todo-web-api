"use strict";
const express = require('express');
const todoService = require('./todo-service');
const router = express.Router();
router.get('/list', (req, res) => {
    res.json(todoService.list());
});
router.post('/create', (req, res) => {
    let todoItem = req.body;
    todoService.create(todoItem);
    res.sendStatus(201);
});
function registerTodoRouter(app) {
    app.use('/todo', router);
}
exports.registerTodoRouter = registerTodoRouter;
