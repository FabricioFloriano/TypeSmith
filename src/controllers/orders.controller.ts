import { Request, Response } from 'express';
import OrdersService from '../services/orders.service';

async function listAll(req: Request, res: Response): Promise<void> {
  const orders = await OrdersService.listAll();
  res.status(200).json(orders);
}

const createOrder = async (req: Request, res: Response) => {
  const { userId, productIds } = req.body;
  const order = await OrdersService.createOrder(userId, productIds);
  res.status(201).json(order);
};

export default { listAll, createOrder };