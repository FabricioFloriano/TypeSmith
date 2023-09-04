import express from 'express';
import ordersController from '../controllers/orders.controller';
import authValidation from '../middlewares/auth.validation';
import validationUser from '../middlewares/user.validations';
import validationProduct from '../middlewares/product.validation';

const orderRouter = express.Router();

orderRouter.get('/', ordersController.listAll);
orderRouter.post(
  '/', 
  authValidation, 
  validationUser,
  validationProduct, 
  ordersController.createOrder,
);

export default orderRouter;