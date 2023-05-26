import { Router } from 'express';
import { getReportController } from '../controllers/report.controllers';
import { ensureUserExist } from '../middlewares/ensureUserExist.middleware';

export const reportsRoutes: Router = Router();

reportsRoutes.get('/:userId', ensureUserExist, getReportController);