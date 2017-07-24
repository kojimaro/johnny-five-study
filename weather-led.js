var cron = require('node-cron');
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

  cron.schedule('*/5 * * * * *',()=>{
      getWeatherInformation();
  });

  anode.color("FF0000");
});

function getWeatherInformation() {
    console.log("hellow");
}