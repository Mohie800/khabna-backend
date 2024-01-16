const Service = require("../model/services");

const create = async (title, description, details, url) => {
  const service = await Service.create({ title, description, details, url });
  await service.save();
  return service;
};
const get = async () => {
  const service = await Service.find({});
  //    await service.save();
  return service;
};

const remove = async (id) => {
  const service = Service.findByIdAndDelete(id);
  return service;
};

module.exports = { create, get, remove };
