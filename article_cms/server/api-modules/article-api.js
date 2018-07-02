const models = require('../db');
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

module.exports = router;
