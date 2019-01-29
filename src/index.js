const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");

// Import Module
const api = require("./api");

const app = new Koa();
const router = new Router();

// Set router
router.use("/api", api.routes());

// BodyParser는 라우터 적용전에
app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

app.listen(7436, () => {
    console.log("listeing to port 7436");
});
