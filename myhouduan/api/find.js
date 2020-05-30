const msg = require('../model/msg.js')
async function find(req,res){
	var a = await msg.findOne()
	if(a){
        var b = await msg.deleteOne({"msg":a.msg})
        res.send(a)
	}else{
		res.send('获取失败')
	}
}

module.exports = find