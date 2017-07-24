var cronJob = require('node-cron').CronJob;
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

  /*cron.schedule('5 0 0 * * *',()=>{
      getWeatherInformation();
  });*/

  var cron = new cronJob({
      cronTime: '*/5 * * * * *',
      onTick: function() {
          getWeatherInformation();
      },
      start: true,
      timeZone: 'Asia/Tokyo'
  });

  anode.color("FF0000");
});

function getWeatherInformation() {
    console.log("hellow");
}