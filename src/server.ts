import express from 'express';
import routes from './controllers';

const app = express();
app.use('/', routes);

export default app;
