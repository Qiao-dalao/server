const msg = require('../model/msg.js')
async function ceshi(req,res){
	var a = await msg.create({username:'123'})
	if(a){
		res.send('添加成功')
	}else{
		res.send('添加失败')
	}
}

module.exports = ceshi