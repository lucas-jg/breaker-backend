const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

router.get("/", ctx => {
    ctx.body = "Home";
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(7436, () => {
    console.log("listeing to port 7436");
});
