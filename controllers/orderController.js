const Order = require("../model/order");

const create = async (no, phone, city, statusId) => {
  const order = await Order.create({ no, phone, city, statusId });
  await order.save();
  return order;
};
const get = async () => {
  const order = await Order.find({});
  //    await order.save();
  return order;
};
const getNew = async () => {
  const order = await Order.find({ statusId: 1 });
  //    await order.save();
  return order;
};
const getProccess = async () => {
  const order = await Order.find({ statusId: 2 });
  //    await order.save();
  return order;
};
const getComplete = async () => {
  const order = await Order.find({ statusId: 3 });
  //    await order.save();
  return order;
};

const update = async (id, statusId) => {
  const order = await Order.findByIdAndUpdate(id, { statusId });
  return order;
};

const remove = async (id) => {
  const order = Order.findByIdAndDelete(id);
  return order;
};

module.exports = {
  create,
  get,
  remove,
  update,
  getNew,
  getProccess,
  getComplete,
};
