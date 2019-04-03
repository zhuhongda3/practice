// const CONNECT_TIMEOUT = 5000; //连接超时时间

var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'nodejs',
    port: 3306
});

var selectSQL = 'select * from t_user limit 10';

pool.getConnection(function (err, conn) {
    if (err) console.log("POOL ==> " + err);

    var sql = "show variables like 'wait_timeout'";
    conn.query(sql, function (err, res) {
      if (err) console.log("POOL ==> " + err);
      console.log('wait_timeout:',res);  // [ RowDataPacket { Variable_name: 'wait_timeout', Value: '28800' } ]
     
    });

    function query(){
      conn.query(selectSQL,function(err,rows){
        if (err) console.log(err);
        console.log("SELECT ==> ");
        for (var i in rows) {
            console.log(rows[i]);
        }
        conn.release();
      });
    }
    query();
    // setTimeout(query,CONNECT_TIMEOUT);
});