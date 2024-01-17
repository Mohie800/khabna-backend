const Employee = require("../model/employee");

const create = async (
  name,
  age,
  sex,
  phone,
  city,
  nationality,
  job,
  education,
  xp,
  statusId,
  file
) => {
  const order = await Employee.create({
    name,
    age,
    sex,
    phone,
    city,
    nationality,
    job,
    education,
    xp,
    statusId,
    file,
    id: Math.random(5).toFixed(5) * 100000,
  });
  await order.save();
  return order;
};
const get = async () => {
  const order = await Employee.find({});
  //    await order.save();
  return order;
};
const getNew = async () => {
  const order = await Employee.find({ statusId: 1 });
  //    await order.save();
  return order;
};
const getProccess = async () => {
  const order = await Employee.find({ statusId: 2 });
  //    await order.save();
  return order;
};
const getComplete = async () => {
  const order = await Employee.find({ statusId: 3 });
  //    await order.save();
  return order;
};

const update = async (id, statusId) => {
  const order = await Employee.findByIdAndUpdate(id, { statusId });
  return order;
};

const remove = async (id) => {
  const order = Employee.findByIdAndDelete(id);
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
