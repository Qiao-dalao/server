const mongoose = require('mongoose')
mongoose.connect('mongodb://0.0.0.0/ceshi')
const db = mongoose.connection;

db.on('error',console.error.bind(console, 'connection error:'))

db.once('open',function () {
console.log('数据库绑定成功')
})

module.exports = db