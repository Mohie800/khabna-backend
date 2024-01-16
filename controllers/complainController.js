const Complain = require("../model/complain");

const create = async (
  name,
  city,
  neighberhood,
  phone,
  type,
  description,
  statusId
) => {
  const order = await Complain.create({
    name,
    city,
    neighberhood,
    phone,
    type,
    description,
    statusId,
  });
  await order.save();
  return order;
};
const get = async () => {
  const order = await Complain.find({});
  //    await order.save();
  return order;
};
const getNew = async () => {
  const order = await Complain.find({ statusId: 1 });
  //    await order.save();
  return order;
};
const getProccess = async () => {
  const order = await Complain.find({ statusId: 2 });
  //    await order.save();
  return order;
};
const getComplete = async () => {
  const order = await Complain.find({ statusId: 3 });
  //    await order.save();
  return order;
};

const update = async (id, statusId) => {
  const order = await Complain.findByIdAndUpdate(id, { statusId });
  return order;
};

const remove = async (id) => {
  const order = Complain.findByIdAndDelete(id);
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
