const functions = {
  add: (num1, num2) => num1 + num2
}

//Convert function//////////////////////////////////////////////////////
function hexToRgbProcess(hex) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ] : console.log('Invalid Entry!');
}

//Implementing a read method/////////////////////////////////////////////
const converter = require('readline');
const rl = converter.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question('Code? ', (answer) => {
  if (typeof hexToRgbProcess(answer) != "undefined") {
    console.log(hexToRgbProcess(answer));
  }
  rl.close();
});


////////////////////////////////////////////////////////////////////////////////

const mainProgram = {
  hexToRgb: (answer) => hexToRgbProcess(answer)
}

module.exports = mainProgram;