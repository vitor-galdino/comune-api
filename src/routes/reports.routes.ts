import { Router } from 'express';
import { getReportController } from '../controllers/report.controllers';
import { ensureCustomerExist } from '../middlewares/ensureCustomerExist.middleware';

export const reportsRoutes: Router = Router();

reportsRoutes.get('/:customerId', ensureCustomerExist, getReportController);