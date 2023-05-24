import 'dotenv/config';
import { app } from './app';
import { AppDataSource } from './data-source';

AppDataSource.initialize().then(() => {
  console.log('Database connected!');
  const PORT: string | number = process.env.SERVER_PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/ 🚀`);
  });
}).catch(err => {
  console.error(err);
});