import { Request, Response } from 'express';
import { createCustomerService } from '../services/customer/createCustomer.service';

export const createCustomerController = async (req: Request, res: Response): Promise<Response> => {
  const customerData = await createCustomerService(req.body);
  return res.status(201).json(customerData);
};

