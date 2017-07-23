var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var anode = new five.Led.RGB({
    pins: {
      red: 6,
      green: 5,
      blue: 3
    },
    isAnode: true
  });

  var index = 0;
  var rainbow = ["FF0000", "FF7F00", "FF007F", "00FF00", "0000FF", "00FFBF"];

  this.loop(1000, function() {
    anode.color(rainbow[index++]);
    if (index === rainbow.length) {
      index = 0;
    }
  });
});