const Router = require('express').Router();
const { HotelsService } = require('../services/');

Router.post('/hotels/', HotelsService.create)
  .get('/hotels/', HotelsService.find)
  .get('/hotels/:id', HotelsService.get)
  .put('/hotels/:id', HotelsService.update)
  .delete('/hotels/:id', HotelsService.remove);

module.exports = Router;
