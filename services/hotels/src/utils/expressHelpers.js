const ExpressRouter = require('express').Router;
const { asyncHandler } = require('./handlers');

const ctrBuilder = function controllerBuilder(url, service) {
  const Router = ExpressRouter();

  Router.route(url)
    .post('/', asyncHandler(service.create))
    .get('/:id', asyncHandler(service.get))
    .get('/', asyncHandler(service.find))
    .put('/:id', asyncHandler(service.update))
    .delete('/:id', asyncHandler(service.remove));

  return Router;
};

module.exports = {
  ctrBuilder
};
