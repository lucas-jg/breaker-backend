let mapsId = 1;

const maps = [
    {
        id: 1,
        title: "title",
        count: 0,
        data: [
            { blockID: 10, iIndex: 68 },
            { blockID: 10, iIndex: 94 },
            { blockID: 10, iIndex: 74 },
            { blockID: 10, iIndex: 113 },
            { blockID: 10, iIndex: 70 },
            { blockID: 10, iIndex: 118 },
            { blockID: 10, iIndex: 97 },
            { blockID: 0, iIndex: 157 }
        ],
        user: "lucas",
        bestScore: {
            user: "lucas",
            score: 192873672
        }
    }
];

/**
 * Map 업로드
 * POST /api/maps
 */
exports.upload = ctx => {
    ctx.body = maps;
};

/**
 * Map List 조회
 * GET /api/maps
 */
exports.list = ctx => {
    ctx.body = maps;
};

/**
 * Map 상세 조회
 * GET /api/maps/:id
 */
exports.detail = ctx => {
    ctx.body = maps;
};

/**
 * Map 삭제
 * DELETE /api/maps/:id
 */
exports.remove = ctx => {
    ctx.body = maps;
};

/**
 * Map 수정
 * PUT /api/maps/:id
 */
exports.replace = ctx => {
    ctx.body = maps;
};

/**
 * Map에 대한 최고 스코어 수정
 * PUT /api/maps/score/:id
 */
exports.replaceScore = ctx => {
    ctx.body = maps;
};
