import { Request, Response } from 'express';
import { createCustomerService } from '../services/customers/createCustomer.service';
import { getCustomerService } from '../services/customers/getCustomer.service';
import { listCustomersService } from '../services/customers/listCustomers.service';
import { updateCustomerService } from '../services/customers/updateCustomer.service';

export const createCustomerController = async (req: Request, res: Response): Promise<Response> => {
  const customerData = await createCustomerService(req.body);
  return res.status(201).json(customerData);
};

export const listCustomersController = async (req: Request, res: Response): Promise<Response> => {
  const customersData = await listCustomersService();
  return res.json(customersData);
};

export const getCustomerController = async (req: Request, res: Response): Promise<Response> => {
  const id: number = parseInt(req.params.customerId);
  const customersData = await getCustomerService(id);
  return res.json(customersData);
};

export const updateCustomerController = async (req: Request, res: Response): Promise<Response> => {
  const id: number = parseInt(req.params.customerId);
  const customerData = await updateCustomerService(id, req.body);
  return res.json(customerData);
};