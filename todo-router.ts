import * as express from 'express';
import * as todoService from './todo-service';

const router = express.Router();

router.get('/list', (req, res) => {
    todoService.list().then((todoItems) => {
        res.json(todoItems);
    })
});

router.post('/create', (req, res) => {
    let todoItem = req.body;
    todoService.create(todoItem).then(() => {
        res.sendStatus(201);
    });
});

export function registerTodoRouter(app) {
    app.use('/todo', router);
}