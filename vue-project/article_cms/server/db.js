// Schema(模式)、Model(模型)、Entity(实例)或者Documents的关系请牢记，Schema生成Model，Model创造Entity，
//Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/local');
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.once('error', () => console.log('Mongodb connection error'));
db.once('open', () => console.log('Mongodb connection successed'));

/************** Schema 模式 **************/
const loginSchema = mongoose.Schema({
  account: String,
  password: String
}, {
  collection: 'logins'
});

const articleSchema = mongoose.Schema({
  title: String,
  content: String,
  createTime: {
    type: Date,
    default: Date.now
  },
  updateTime: {
    type: Date,
    default: Date.now
  }
}, {
  collection: 'articles',
  versionKey: false,
  timestamps: {
    createdAt: 'createTime',
    updatedAt: 'updateTime'
  }
});

/************** Model 模型 **************/
const Models = {
  Login: mongoose.model('Login', loginSchema, 'logins'),
  Article: mongoose.model('Article', articleSchema, 'articles')
}

module.exports = Models;
