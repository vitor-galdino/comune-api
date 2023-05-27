import { Router } from 'express';
import { getReportController } from '../controllers/report.controllers';
import { ensureValidToken } from '../middlewares/ensureValidToken.middleware';

export const reportsRoutes: Router = Router();

reportsRoutes.get('', ensureValidToken, getReportController);