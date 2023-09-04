import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import mockOrders from '../../mocks/orders.mock';
import OrderModel from '../../../src/database/models/order.model';

chai.use(chaiHttp);

describe('GET /orders', function () {
  beforeEach(function () { sinon.restore(); });
  it('Testa se é retornado todos os pedidos', async function () {
    const buildOrders = mockOrders.mockOrders.map((order) => OrderModel.build(order));
    sinon.stub(OrderModel, 'findAll').resolves(buildOrders);
    const response = await chai.request(app).get('/orders');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(buildOrders.map(order => order.dataValues));
  });
});
