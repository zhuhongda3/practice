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
    newAccount.save((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send('create a account successed');
        }
    });
});

// 读取全部数据
router.get('/api/login/searchAccount',(req,res) => {
    models.Login.find((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
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
        res.send(data);
    });
})

//删除单条数据
router.delete('/api/login/deleteAccount',(req,res) => {
    models.Login.remove({_id:req.body.id},(err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send('delete a account successed');
        }
    });
});

module.exports = router;
