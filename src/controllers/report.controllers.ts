import { Request, Response } from 'express';
import { getReportService } from '../services/reports/getReport.service';

export const getReportController = async (req: Request, res: Response): Promise<Response> => {
  const customerId: number = parseInt(req.params.customerId);
  const reportData = await getReportService(customerId);
  return res.json(reportData);
};