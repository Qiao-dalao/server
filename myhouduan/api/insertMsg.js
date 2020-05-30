const msg = require('../model/msg.js')
async function insertMsg(req,res){
    var data = req.body
    for(var i=0;i<data.length;i++){
        msg.create({msg:data[i]})
    }
    res.send('添加成功')
}

module.exports = insertMsg