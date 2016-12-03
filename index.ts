import * as express from 'express';

const app = express();
const port = process.env.PORT || 9090;

app.get('/todo/list', (req, res) => {
    const todoItems = [
        { title: 'Learn NodeJS', complete: false },
        { title: 'Develop express app', complete: false }
    ]

    res.json(todoItems);
});

app.listen(port, () => console.log(`Server listen on ${port}`));