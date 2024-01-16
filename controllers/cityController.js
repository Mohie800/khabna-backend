const City = require("../model/city");

const EditCity = async (id, name) => {
  const city = await City.findById(id);
  (city.name = name), await city.save();
  return city;
};
const createCity = async (name) => {
  const city = await City.create({ name });
  await city.save();
  return city;
};
const getCity = async () => {
  const city = await City.find({});
  //    await City.save();
  return city;
};
const remove = async (id) => {
  const city = await City.findByIdAndDelete(id);
  //    await City.save();
  return city;
};

module.exports = { EditCity, createCity, getCity, remove };
