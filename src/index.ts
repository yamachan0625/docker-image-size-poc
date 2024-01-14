import express from 'express';
import type { Express, Request, Response } from 'express';

const app: Express = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => res.send('Hello World!2'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
