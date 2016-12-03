import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { registerTodoRouter } from './todo-router';

const app = express();
const port = process.env.PORT || 9090;

app.use(bodyParser.json());
app.use(cors());

registerTodoRouter(app);

app.listen(port, () => console.log(`Server listen on ${port}`));