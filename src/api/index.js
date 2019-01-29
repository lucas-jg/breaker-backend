const Router = require("koa-router");
const maps = require("./maps");

const api = new Router();

api.use("/maps", maps.routes());

module.exports = api;
