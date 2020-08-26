const stdin = process.stdin;

let connection;

const setupInput = function(conn) {
  connection = conn;

  stdin.setRawMode(true);
  stdin.setEncoding('utf8');

  
  const handleUserInput = stdin.on('data', (key)=>{
    if (key === 'w') {
      connection.write("Move: up");
    } else if (key === 's') {
      connection.write("Move: down");
    }
    if (key === 'a') {
      connection.write("Move: left");
    } else if (key === 'd') {
      connection.write("Move: right");
    }

    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'm') {
      connection.write('Say: hello');
    }
  });
  
  stdin.resume();
  return stdin, handleUserInput;
};

module.exports = {setupInput};
