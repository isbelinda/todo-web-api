import * as express from 'express';
import * as todoService from './todo-service';

const router = express.Router();

router.get('/list', (req, res) => {
    res.json(todoService.list());
});

router.post('/create', (req, res) => {
    let todoItem = req.body;
    todoService.create(todoItem);

    res.sendStatus(201);
});

export function registerTodoRouter(app) {
    app.use('/todo', router);
}