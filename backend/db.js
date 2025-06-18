const mysql =require('mysql12');



const connection = mysql.createConnection({
  host: '34.123.55.201',
  user: 'sio-test',
  password: 'Sicca@712',
  database: 'sio-test',
  port: 3306   // MySQL default port, unless it's custom
});


module.exports=connection;