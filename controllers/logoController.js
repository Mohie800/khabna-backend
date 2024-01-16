const Logo = require("../model/logo");

const Edit = async (id, url) => {
  const logo = await Logo.findById(id);
  if (url) {
    logo.url = url;
  }
  await logo.save();
  return logo;
};
const create = async (url) => {
  const logo = await Logo.create();
  return logo;
};
const get = async () => {
  const logo = await Logo.findOne({});
  //    await logo.save();
  return logo;
};

module.exports = { Edit, create, get };
