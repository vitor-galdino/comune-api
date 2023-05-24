import { Request, Response } from 'express';
import { getReportService } from '../services/reports/getReport.service';

export const getReportController = async (req: Request, res: Response): Promise<Response> => {
  const customerId: number = parseInt(req.params.customerId);
  const [pdfBuffer, customerName] = await getReportService(customerId);
  const fileName = `relatorio_cliente_${customerName.replace(' ', '_')}.pdf`;

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);

  return res.send(pdfBuffer);
};