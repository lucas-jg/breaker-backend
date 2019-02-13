const Map = require('schemas/map')
const HttpStatus = require('http-status-codes')

/**
 * Map 업로드
 * POST /api/maps
 */
exports.upload = async ctx => {
    const { title, owner, mapData } = ctx.request.body

    const map = new Map({
        title,
        owner,
        mapData
    })

    try {
        await map.save()
        ctx.body = map
    } catch (e) {
        ctx.throw(e, HttpStatus.INTERNAL_SERVER_ERROR)
    }
}

/**
 * Map List 조회
 * GET /api/maps
 */
exports.list = async ctx => {
    const { owner } = ctx.query
    const query = owner ? { owner: owner } : {}
    const fieldQuery = {
        createDate: 0,
        mapData: 0,
        count: 0
    }
    try {
        const maps = await Map.find(query, fieldQuery)
            .sort({ _id: -1 })
            .exec()

        ctx.body = maps
    } catch (e) {
        ctx.throw(e, HttpStatus.INTERNAL_SERVER_ERROR)
    }
}

/**
 * Map 상세 조회
 * GET /api/maps/:id
 */
exports.detail = async ctx => {
    const { id } = ctx.params
    try {
        const map = await Map.findById(id).exec()

        if (!map) {
            ctx.status = HttpStatus.NOT_FOUND
            return
        }

        ctx.body = map
    } catch (e) {
        ctx.throw(e, HttpStatus.INTERNAL_SERVER_ERROR)
    }
}

/**
 * Map 삭제
 * DELETE /api/maps/:id
 */
exports.remove = async ctx => {
    const { id } = ctx.params
    try {
        await Map.findByIdAndRemove(id).exec()
        ctx.status = HttpStatus.NO_CONTENT
    } catch (e) {
        ctx.throw(e, HttpStatus.INTERNAL_SERVER_ERROR)
    }
}

/**
 * Map 수정
 * PUT /api/maps/:id
 */
exports.update = async ctx => {
    const { id } = ctx.params
    try {
        const map = await Map.findByIdAndUpdate(id, ctx.request.body, {
            new: true
        }).exec()

        if (!map) {
            ctx.status = HttpStatus.NOT_FOUND
            return
        }

        ctx.body = map
    } catch (e) {
        ctx.throw(e, HttpStatus.INTERNAL_SERVER_ERROR)
    }
}
