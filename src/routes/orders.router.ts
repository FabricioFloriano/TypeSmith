import express from 'express';
import ordersController from '../controllers/orders.controller';

const orderRouter = express.Router();

orderRouter.get('/', ordersController.listAll);

export default orderRouter;