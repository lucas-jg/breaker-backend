const Map = require('schemas/map')
const HttpStatus = require('http-status-codes')

/**
 * Map 업로드
 * POST /api/maps
 */
exports.upload = async ctx => {
    const { title, owner, mapData, password } = ctx.request.body

    const map = new Map({
        title,
        owner,
        mapData,
        password
    })

    console.log(map)

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
        count: 0,
        password: 0
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
        ctx.body = `id[${id}] 삭제 완료`
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
            ctx.body = 'ID를 찾을 수 없음'
            return
        }

        ctx.body = map
    } catch (e) {
        ctx.throw(e, HttpStatus.INTERNAL_SERVER_ERROR)
    }
}

/**
 * Map bestScore 수정
 * PUT /api/maps/score/:id
 */
exports.updateScore = async ctx => {
    const { id } = ctx.params
    const { bestScore } = ctx.request.body

    const score = bestScore && {
        bestScore: bestScore
    }

    try {
        // Score가 없는 경우 Error
        if (typeof score === 'undefined') {
            console.log('undefined bestScore')
            ctx.status = HttpStatus.INTERNAL_SERVER_ERROR
            ctx.body = 'undefined bestScore'
            return
        }

        const map = await Map.findByIdAndUpdate(id, score, {
            new: true
        }).exec()

        if (!map) {
            ctx.status = HttpStatus.NOT_FOUND
            ctx.body = 'ID를 찾을 수 없음'
            return
        }

        ctx.body = map
    } catch (e) {
        ctx.throw(e, HttpStatus.INTERNAL_SERVER_ERROR)
    }
}

/**
 * Header에서 Password를 검증하는 것
 */
exports.checkPassword = async (ctx, next) => {
    const { id } = ctx.params
    const { password } = ctx.request.header

    try {
        const map = await Map.findById(id).exec()
        if (!map) {
            ctx.status = HttpStatus.NOT_FOUND
            ctx.body = 'ID를 찾을 수 없음'
            return
        }

        if (map.password && map.password !== password) {
            ctx.status = HttpStatus.NOT_ACCEPTABLE
            ctx.body = '패스워드가 다름'
            return
        }
    } catch (e) {
        ctx.throw(e, HttpStatus.INTERNAL_SERVER_ERROR)
    }

    console.log('Password 검증 통과 : ' + password)

    return next()
}
