import * as express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.status(400).send('Hello Express App');
});

app.listen(3000, () => console.log('Server listen on 3000'));