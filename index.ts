import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

const app = express();
const port = process.env.PORT || 9090;

app.use(bodyParser.json());
app.use(cors());


const todoItems = [
    { title: 'Learn NodeJS', complete: false },
    { title: 'Develop express app', complete: false }
]


app.get('/todo/list', (req, res) => {
    res.json(todoItems);
});

app.post('/todo/create', (req, res) => {
    let todoItem = req.body;
    todoItems.push(todoItem);

    res.sendStatus(201);
});

app.listen(port, () => console.log(`Server listen on ${port}`));