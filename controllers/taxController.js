const TaxRecord = require("../model/taxRecord");

const EditNumber = async (id, number, url) => {
  const taxRecord = await TaxRecord.findById(id);
  if (url) {
    taxRecord.url = url;
  }
  taxRecord.number = number;
  await taxRecord.save();
  return taxRecord;
};
const EditUrl = async (id, url) => {
  const taxRecord = await TaxRecord.findById(id);

  taxRecord.url1 = url;

  await taxRecord.save();
  return taxRecord;
};
const createNumber = async (number, url) => {
  const taxRecord = await TaxRecord.create({ number, url });
  await taxRecord.save();
  return taxRecord;
};
const getNumber = async () => {
  const taxRecord = await TaxRecord.findOne({});
  //    await taxRecord.save();
  return taxRecord;
};

module.exports = { EditNumber, createNumber, getNumber, EditUrl };
