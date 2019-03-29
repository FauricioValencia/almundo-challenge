const { HotelModel } = require('../models');
const { asyncHandler } = require('../utils');

const create = async function createHotel(req, res) {
  res.send({ message: 'Operation not supported' });
};

const get = async function getHotelById(req, res) {
  const { id } = req.params;
  const hotel = await HotelModel.findById(id);
  res.send(hotel);
};

const find = async function findHotels(req, res) {
  const { name, stars } = req.query;

  const query = HotelModel.find();
  if (stars) query.where('stars').in(stars.split(',').map(s => parseInt(s)));
  if (name) query.where('name').equals(name);

  const results = await query.exec();

  res.send(results);
};

const update = async function updateHotel(req, res) {
  const { id } = req.params;
  const updatedHotel = await HotelModel.findByIdAndUpdate(id, req.body);
  res.send({ message: 'Document udpated.', updatedHotel });
};

const remove = async function removeHotel(req, res) {
  const { id } = req.params;
  await HotelModel.findByIdAndRemove(id);
  res.send('Deleted successfully!');
};

module.exports = { create, get, find, remove, update };
