"use strict";
const express = require('express');
const todoService = require('./todo-service');
const router = express.Router();
router.get('/list', (req, res) => {
    todoService.list().then((todoItems) => {
        res.json(todoItems);
    });
});
router.post('/create', (req, res) => {
    let todoItem = req.body;
    todoService.create(todoItem).then(() => {
        res.sendStatus(201);
    });
});
function registerTodoRouter(app) {
    app.use('/todo', router);
}
exports.registerTodoRouter = registerTodoRouter;
