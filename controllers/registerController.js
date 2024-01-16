const Register = require("../model/register");

const EditNumber = async (id, number, url, authNo) => {
  const register = await Register.findById(id);
  if (url) {
    register.url = url;
  }
  register.number = number;
  register.authNo = authNo;
  await register.save();
  return register;
};
const createNumber = async (number, url) => {
  const register = await Register.create({ number, url });
  await register.save();
  return register;
};
const getNumber = async () => {
  const register = await Register.findOne({});
  //    await register.save();
  return register;
};

module.exports = { EditNumber, createNumber, getNumber };
