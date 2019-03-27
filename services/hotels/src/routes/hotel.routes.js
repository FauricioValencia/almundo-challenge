const Router = require('express').Router();
const { HotelsService } = require('../services/');

Router.post('/hotels/', HotelsService.create)
  .get('/hotels/:id', HotelsService.get)
  .get('/hotels/', HotelsService.find)
  .put('/hotels/:id', HotelsService.update)
  .delete('/hotels/:id', HotelsService.remove);

module.exports = Router;
