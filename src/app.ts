import 'express-async-errors';
import express, { Application } from 'express';
import { handleErrors } from './middlewares/handleErrors.middleware';
import { customersRoutes } from './routes/customers.routes';

export const app: Application = express();
app.use(express.json());

app.use('/customers', customersRoutes);

app.use(handleErrors);