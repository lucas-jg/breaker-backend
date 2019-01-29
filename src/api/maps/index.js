const Router = require("koa-router");

const maps = new Router();

maps.get("/test", ctx => {
    ctx.body = "모듈화 테스트";
});

const printInfo = ctx => {
    ctx.body = {
        method: ctx.method,
        path: ctx.path,
        params: ctx.params
    };
};

// 리스트 조회
maps.get("/", printInfo);
// Map 상세 조회
maps.get("/:id", printInfo);
// Map 삭제
maps.delete("/:id", printInfo);
// Map 수정
maps.put("/:id", printInfo);
// Map 입력
maps.post("/", printInfo);
// Map에 대한 최고점 입력
maps.post("/score/:id", printInfo);

module.exports = maps;
