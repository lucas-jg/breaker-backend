require("dotenv").config();

const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");

// Import Module
const api = require("./api");

const mongoose = require("mongoose");

const { PORT: port = 7436, MONGO_URI: mongoURI } = process.env;

// Node의 Promise를 사용하도록 설정
mongoose.Promise = global.Promise;
mongoose
    .connect(mongoURI)
    .then(() => {
        console.log("Connected to MongoDB => " + mongoURI);
    })
    .catch(e => {
        console.log(e);
    });

const app = new Koa();
const router = new Router();

// Set router
router.use("/api", api.routes());

// BodyParser는 라우터 적용전에
app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
    console.log("listeing to port : " + port);
});
