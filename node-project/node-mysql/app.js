var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database:'nodejs',
    port: 3306
});
conn.connect();

conn.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
});

var insertSQL = 'insert into t_user(name) values("conan"),("fens.me")';
var deleteSQL = 'delete from t_user';
var updateSQL = 'update t_user set name="conan update" where name="conan"';
var selectSQL = 'select * from t_user limit 10';

conn.query(deleteSQL, function (err, res) {
  if (err) console.log(err);
  console.log("DELETE Return ==> ");
  console.log(res);
});

conn.query(insertSQL, function (err, res) {
  if (err) console.log(err);
  console.log("INSERT Return ==> ");
  console.log(res);
});

conn.query(selectSQL, function (err, rows) {
  if (err) console.log(err);
  console.log("SELECT ==> ");
  for(var i in rows){
    console.log(rows[i]);
  }
});

conn.query(updateSQL, function (err, res) {
  if (err) console.log(err);
  console.log("UPDATE Return ==> ");
  console.log(res)
});

conn.end();