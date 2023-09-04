import express from 'express';
import productController from '../controllers/product.controller';
import validationName from '../middlewares/name.validations';
import validationPrice from '../middlewares/price.validations';

const productRouter = express.Router();

productRouter.post('/', validationName, validationPrice, productController.createProduct);
productRouter.get('/', productController.getAllProducts);

export default productRouter;