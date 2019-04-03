const models = require('./db');
const express = require('express');
const router = express.Router();

// 创建文章
router.post('/api/article/createPost', (req, res) => {
  let newPost = new models.Article({
    title: req.body.title,
    content: req.body.content
  });
  models.Article.count({
    "title": newPost.title
  }, (err, docs) => {
    if (err) {
      console.log("Error：" + err)
      res.send(err)
    } else {
      if (docs >= 1) {
        console.log("发布失败")
        res.send({
          code: 1,
          msg: '文章已存在'
        })
      } else {
        newPost.save((err, data) => {
          if (err) {
            res.send(err);
          } else {
            console.log("发布成功")
            res.send({
              code: 0,
              msg: '文章提交成功'
            });
          }
        });
      }
    }
  });
});

// 删除文章
router.post('/api/article/deletePost', (req, res) => {
  models.Article.findByIdAndRemove({
    _id: req.body.id
  }, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      console.log("文章删除成功");
      res.send({
        code: 0,
        msg: '文章删除成功'
      });
    }
  });
});

//修改文章
router.post('/api/article/updatePost', (req, res) => {
  let params = {
      $set: {
        title: req.body.title,
        content: req.body.content
      }
    },
    id = req.body.id;

  models.Article.count({
    "_id": id
  }, (err, docs) => {
    if (err) {
      console.log("Error：" + err)
      res.send(err)
    } else {
      if (docs >= 1) {
        models.Article.findByIdAndUpdate(id, params, function (err, data) {
          if (err) return handleError(err);
          console.log("文章修改成功")
          res.send({
            code: 0,
            msg: '文章修改成功'
          })
        });
      } else {
        console.log("文章不存在,修改失败")
        res.send({
          code: 1,
          msg: '文章不存在,修改失败'
        })
      }
    }
  });
});

// 查询全部文章
router.get('/api/article/searchPost', (req, res) => {
  models.Article.find((err, data) => {
    if (err) {
      res.send(err);
    } else {
      console.log("获取全部数据成功");
      res.send({
        code: 0,
        data: data,
        msg: '获取全部数据成功'
      });
    }
  });
});

//查询单篇文章
router.get('/api/article/searchOnePost', (req, res) => {
  models.Article.findById({
    _id: req.query.id
  }, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      console.log("获取单条数据成功");
      res.send({
        code: 0,
        data: data,
        msg: '获取单条数据成功'
      });
    }
  });
});

// 创建单条数据
router.post('/api/login/createAccount', (req, res) => {
  let newAccount = new models.Login({
    account: req.body.account,
    password: req.body.password
  });
  models.Login.count({
    "account": newAccount.account
  }, (err, docs) => {
    if (err) {
      console.log("Error：" + err)
      res.send(err)
    } else {
      if (docs >= 1) {
        console.log("注册失败")
        res.send({
          code: 1,
          msg: '账号已存在'
        })
      } else {
        newAccount.save((err, data) => {
          if (err) {
            res.send(err);
          } else {
            console.log("注册成功")
            res.send({
              code: 0,
              msg: '账号创建成功'
            });
          }
        });
      }
    }
  });
});

// 删除账户数据
router.post('/api/login/deleteAccount', (req, res) => {
  models.Login.remove({
    account: req.body.account
  }, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      console.log("删除数据成功");
      res.send({
        code: 0,
        msg: '删除数据成功'
      });
    }
  });
});

// 修改账户数据
router.post('/api/login/updateAccount', (req, res) => {
  let params = {
      $set: {
        account: req.body.account,
        password: req.body.password
      }
    },
    id = req.body.id;
  models.Login.findByIdAndUpdate(id, params, function (err, data) {
    if (err) return handleError(err);
    console.log("更新成功")
    res.send({
      code: 0,
      msg: '更新数据成功'
    })
  });
})

// 查询全部数据
router.get('/api/login/searchAccount', (req, res) => {
  models.Login.find((err, data) => {
    if (err) {
      res.send(err);
    } else {
      console.log("获取数据成功");
      res.send({
        code: 0,
        data: data,
        msg: '获取数据成功'
      });
    }
  });
});

//登录验证
router.post('/api/login/login', (req, res) => {
  let account = req.body.account,password = req.body.password;
  models.Login.count({
    "account": account,
    "password": password
  }, (err, docs) => {
    if (err) {
      console.log("Error：" + err)
      res.send(err)
    } else {
      if (docs >= 1) {
        res.cookie('login',{account: account},{maxAge: 1000*60*60*24});
        res.send({
          code: 0,
          msg: '登录成功'
        })
      } else {
        res.send({
          code: 1,
          msg: '登录失败'
        })
      }
    }
  });
});

//是否是登录状态
router.post('/api/login/checkLogin',(req,res) => {
  var c = req.cookies['login'];
  if(c){
    res.send({
      code: 0,
      account: c.account
    })
  }else{
    res.send({
      code: 1,
    })
  }
});

//退出登录
router.post('/api/login/loginOut',(req,res) => {
  res.clearCookie("login");
  res.send({
    code: 0,
  })
})

module.exports = router;
