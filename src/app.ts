import express from 'express';
import productRouter from './routes/product.route';
import ordersRouter from './routes/orders.router';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/orders', ordersRouter);

export default app;
