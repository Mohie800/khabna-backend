const OrderBanner = require("../model/orderBanner");

const Edit = async (id, url) => {
  const orderBanner = await OrderBanner.findById(id);
  if (url) {
    orderBanner.url = url;
  }
  await orderBanner.save();
  return orderBanner;
};
const create = async (url) => {
  const orderBanner = await OrderBanner.create({ url });
  return orderBanner;
};
const get = async () => {
  const orderBanner = await OrderBanner.find({});
  return orderBanner;
};

const remove = async (id) => {
  const banner = await OrderBanner.findByIdAndDelete(id);
  //    await homeBanner.save();
  return banner;
};

module.exports = { Edit, create, get, remove };
