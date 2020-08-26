const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });

  conn.setEncoding('utf8');

  conn.on('connect', ()=>{
    console.log('Connection Established');
  });
  conn.on('connect', ()=>{
    conn.write('Name: SRM');
  });
  conn.on('data', (data)=> {
    console.log(data);
  });
  return conn;
};




module.exports = {connect};