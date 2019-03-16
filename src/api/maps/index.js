const Router = require('koa-router')
const mapsCtrl = require('./maps.ctrl')

const maps = new Router()

maps.get('/', mapsCtrl.list)
maps.post('/', mapsCtrl.upload)
maps.get('/:id', mapsCtrl.detail)
maps.delete('/:id', mapsCtrl.checkPassword, mapsCtrl.remove)
maps.put('/:id', mapsCtrl.checkPassword, mapsCtrl.update)
maps.put('/score/:id', mapsCtrl.updateScore)

module.exports = maps
