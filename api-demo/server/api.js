const models = require('./db');
const express = require('express');
const router = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 创建单条数据
router.post('/api/login/createAccount',(req,res) => {
    let newAccount = new models.Login({
        account : req.body.account,
        password : req.body.password
    });
    models.Login.count({"account": newAccount.account},(err, docs) =>{
        if(err){
            console.log("Error：" + err)
            res.send(err)
        }else{
            if(docs>=1){
                console.log("注册失败")
                res.send({code: 0,msg:'账号已存在'})
            }else{
                newAccount.save((err,data) => {
                    if (err) {
                        res.send(err);
                    } else {
                        console.log("注册成功")
                        res.send({code: 1,msg:'账号创建成功'});
                    }
                });
            }
        }
    });
});

// 读取全部数据
router.get('/api/login/searchAccount',(req,res) => {
    models.Login.find((err,data) => {
        if (err) {
            res.send(err);
        } else {
            console.log("获取数据成功");
            res.send({code: 1,data: data,msg:'获取数据成功'});
        }
    });
});

//更新单条数据
router.post('/api/login/updateAccount',(req,res)=>{
    let params = {
        $set:{
            account: req.body.account,
            password:req.body.password
        }
    },id = req.body.id;
    models.Login.findByIdAndUpdate(id, params, function (err, data) {
        if (err) return handleError(err);
        // res.send(data);
        console.log("更新成功")
        res.send({code:1,msg:'更新数据成功'})
    });
})

router.post('/api/login/deleteAccount',(req,res) => {
    models.Login.remove({account:req.body.account},(err,data) => {
        if (err) {
            res.send(err);
        } else {
            console.log("删除数据成功");
            res.send({code:1,msg:'删除数据成功'});
        }
    });
});

module.exports = router;
