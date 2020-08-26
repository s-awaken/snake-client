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

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  const handleUserInput = stdin.on('data', (key)=>{
    if (key === '\u0003') {
      process.exit();
    }
  });
  stdin.resume();
  return stdin, handleUserInput;
};

setupInput();
module.exports = connect;