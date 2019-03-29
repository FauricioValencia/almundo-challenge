const MainRouter = require('express').Router();
const HotelRouter = require('./hotel.routes');

MainRouter.use('/', HotelRouter);

module.exports = MainRouter;
