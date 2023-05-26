import cors from 'cors';
import express, { Application } from 'express';
import 'express-async-errors';
import { handleErrors } from './middlewares/handleErrors.middleware';
import { contactsRoutes } from './routes/contacts.routes';
import { reportsRoutes } from './routes/reports.routes';
import { usersRoutes } from './routes/users.routes';

export const app: Application = express();
app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:3001'
};

app.use(cors(corsOptions));

app.use('/users', usersRoutes);
app.use('/users/:userId/contacts', contactsRoutes);
app.use('/reports', reportsRoutes);

app.use(handleErrors);