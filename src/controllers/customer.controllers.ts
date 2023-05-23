import { Request, Response } from 'express';
import { createCustomerService } from '../services/customer/createCustomer.service';
import { listCustomersService } from '../services/customer/listCustomers.service';

export const createCustomerController = async (req: Request, res: Response): Promise<Response> => {
  const customerData = await createCustomerService(req.body);
  return res.status(201).json(customerData);
};

export const listCustomersController = async (req: Request, res: Response): Promise<Response> => {
  const customersData = await listCustomersService()
  return res.json(customersData)
}