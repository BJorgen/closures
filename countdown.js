var countdownGenerator = function (x) {
  return function() {
    let blastOffAndAfter = (x === 0) ? `Blast Off!` : `Rocket already gone, bud!`
    let status = (x > 0) ? `T-minus ${x} ...` : blastOffAndAfter
    console.log(status)
    x--;
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!