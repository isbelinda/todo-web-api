import * as express from 'express';

const router = express.Router();

const todoItems = [
    { title: 'Learn NodeJS', complete: false },
    { title: 'Develop express app', complete: false }
]

router.get('/list', (req, res) => {
    res.json(todoItems);
});

router.post('/create', (req, res) => {
    let todoItem = req.body;
    todoItems.push(todoItem);

    res.sendStatus(201);
});

export function registerTodoRouter(app) {
    app.use('/todo', router);
}