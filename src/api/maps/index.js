const Router = require("koa-router");
const mapsCtrl = require("./maps.ctrl");

const maps = new Router();

maps.get("/", mapsCtrl.list);
maps.post("/", mapsCtrl.upload);
maps.get("/:id", mapsCtrl.detail);
maps.delete("/:id", mapsCtrl.remove);
maps.put("/:id", mapsCtrl.replace);
maps.put("/score/:id", mapsCtrl.replaceScore);

module.exports = maps;
