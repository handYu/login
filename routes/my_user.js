const express=require('express');
const pool=require('../pool.js');
var router=express.Router();
router.post('/register',(req,res)=>{
	var obj=req.body;
	var $uname=obj.uname;
	var $code=400;
	for(var key in obj){
		$code++;
		if(!obj[key]){
			res.send({code:$code,msg:key+' require'});
		}
	}
	pool.query('INSERT INTO user SET ?',[obj],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send("注册成功");
		}else{
			res.send("注册失败");
		}
	});
});
//登录接口
router.post('/login',(req,res)=>{
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	if(!$uname){
		res.send("uname require");
		return;
	}
	if(!$upwd){
		res.send("upwd require");
		return;
	}
	pool.query('SELECT * FROM user WHERE uname=? AND upwd=?',[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("登录成功");
		}else{
			res.send("登录失败");
		}
	});
});
module.exports=router;