const Router = require("koa-router");

const api = new Router();

api.get("/test", ctx => {
    ctx.body = "모듈화 테스트";
});

module.exports = api;
