import { Order } from '../types/Order';
import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';

async function listAll(): Promise<Order[]> {
  const orders = await OrderModel.findAll({
    attributes: ['id', 'userId'],
    include: { 
      model: ProductModel,
      as: 'productIds',
      attributes: ['id'],
    },
  });

  console.log(orders);

  const ordersWithOutProductIds = orders.map((order) => ({
    id: order.dataValues.id,
    userId: order.dataValues.userId,
    productIds: order.dataValues.productIds?.map((pIds) => pIds.id),
  }));

  return ordersWithOutProductIds as Order[];
}

export default { listAll };