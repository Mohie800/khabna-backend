const HomeBanner = require("../model/homeBanner");

const Edit = async (id, url) => {
  const homeBanner = await HomeBanner.findById(id);
  if (url) {
    homeBanner.url = url;
  }
  await homeBanner.save();
  return homeBanner;
};
const create = async (url) => {
  const homeBanner = await HomeBanner.create({ url });
  return homeBanner;
};
const get = async () => {
  const homeBanner = await HomeBanner.find({});
  //    await homeBanner.save();
  return homeBanner;
};
const remove = async (id) => {
  const homeBanner = await HomeBanner.findByIdAndDelete(id);
  //    await homeBanner.save();
  return "removed";
};

module.exports = { Edit, create, get, remove };
