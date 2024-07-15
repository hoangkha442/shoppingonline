require('../utils/MongooseUtil');
const Models = require('./Models');

const OrderDAO = {
  async insert(order) {
    const mongoose = require('mongoose');
    order._id = new mongoose.Types.ObjectId();
    const result = await Models.Order.create(order);
    return result;
  }
  ,
  async selectByCustID(_cid) {
    const query = { 'customer._id': _cid };
    const orders = await Models.Order.find(query).exec();
    return orders;
  },
  async selectAll() {
    const query = {};
    const mysort = { cdate: -1 }; // descending
    const orders = await Models.Order.find(query).sort(mysort).exec();
    return orders;
  },
  async update(_id, newStatus) {
    const newvalues = { status: newStatus };
    const result = await Models.Order.findByIdAndUpdate(_id, newvalues, { new: true });
    return result;
  },
  async selectByCount() {
    const query = {};
    const noOrders = await Models.Order.find(query).count().exec();
    return noOrders;
  },
  async selectByCountStatus(status) {
    const query = { status: status };
    const noOrders = await Models.Order.find(query).count().exec();
    return noOrders;
  },
  async sumTotalApproved() {
    const query = { status: 'APPROVED' };
    const orders = await Models.Order.find(query).exec();
    const sum = orders.reduce((sum, order) => sum + order.total, 0);
    return sum;
  }
  
  

};
module.exports = OrderDAO;