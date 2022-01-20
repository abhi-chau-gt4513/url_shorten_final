import express from 'express';
import config from 'config';
import routes from './routes'
import bodyParser from 'body-parser';
import cors from "cors";
import db from './db'

const app = express();

app.use(cors({
    origin: config.get("corsOrigin")
}))

const port = config.get('port');

app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Application listening at http://localhost:${port}`);
    db();
    routes(app);
});