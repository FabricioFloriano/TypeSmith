import { Request, Response } from 'express';
import OrdersService from '../services/orders.service';

async function listAll(req: Request, res: Response): Promise<void> {
  const orders = await OrdersService.listAll();
  res.status(200).json(orders);
}

export default { listAll };