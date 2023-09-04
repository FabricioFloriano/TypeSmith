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

const createOrder = async (userId: number, productIds: number[]): Promise<unknown> => {
  const newOrder = await OrderModel.create({ userId });
  const updateProducts = productIds.map((productId) => ProductModel.update({ 
    orderId: newOrder.dataValues.id }, { where: { id: productId } }));
  await Promise.all(updateProducts);
  return { userId, productIds };
};

export default { listAll, createOrder };