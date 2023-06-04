import cors from 'cors';
import express, { Application } from 'express';
import 'express-async-errors';
import { handleErrors } from './middlewares/handleErrors.middleware';
import { contactsRoutes } from './routes/contacts.routes';
import { loginRoutes } from './routes/login.routes';
import { reportsRoutes } from './routes/reports.routes';
import { usersRoutes } from './routes/users.routes';

export const app: Application = express();
app.use(express.json());

const corsOptions = {
  origin: 'https://comune.vercel.app'
};

app.use(cors(corsOptions));

app.use('/login', loginRoutes);
app.use('/users', usersRoutes);
app.use('/users/contacts', contactsRoutes);
app.use('/reports', reportsRoutes);

app.use(handleErrors);