import { Request, Response } from 'express';
import { getReportService } from '../services/reports/getReport.service';

export const getReportController = async (req: Request, res: Response): Promise<Response> => {
  const userId: number = parseInt(req.params.userId);
  const [pdfBuffer, customerName] = await getReportService(userId);
  const fileName = `relatorio_cliente_${customerName.replace(' ', '_')}.pdf`;

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);

  return res.send(pdfBuffer);
};