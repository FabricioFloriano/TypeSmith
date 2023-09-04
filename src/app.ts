import express from 'express';
import productRouter from './routes/product.route';
import ordersRouter from './routes/orders.router';
import routerLogin from './routes/login.route';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/orders', ordersRouter);
app.use('/login', routerLogin);

export default app;
