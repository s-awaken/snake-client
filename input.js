const stdin = process.stdin;

let connection;

const setupInput = function(conn) {
  connection = conn;

  stdin.setRawMode(true);
  stdin.setEncoding('utf8');

  
  const handleUserInput = stdin.on('data', (key)=>{
    if (key === 'w') {
      conn.write("Move: up");
    } else if (key === 's') {
      conn.write("Move: down");
    }
    if (key === 'a') {
      conn.write("Move: left");
    } else if (key === 'd') {
      conn.write("Move: right");
    }

    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'm') {
      conn.write('Say: hello');
    }
  });
  
  stdin.resume();
  return stdin, handleUserInput;
};

module.exports = {setupInput};
