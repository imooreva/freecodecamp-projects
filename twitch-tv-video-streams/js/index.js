$(document).ready(function() {
  twitchStreams.forEach(function(item) {
    getTwitch(item);
  });
});

var twitchStreams = ["brunofin", "comster404", "cretetion", "ESL_SC2", "freecodecamp", "habathcx", "nalcs1", "noobs2ninjas", "OgamingSC2", "RobotCaleb", "storbeck"];

function getTwitch(twitchstream) {
  $.getJSON("https://api.twitch.tv/kraken/streams/" + twitchstream + "?callback=?", function(data) {
    //console.log(data);
    if (data.stream) {
      $("#streamresults").prepend('<div class="streaminfo-on"><p><a href="https://www.twitch.tv/' + twitchstream + '"><b>' + twitchstream + '</b></a> | ' + data.stream.channel.game + ' | ' + data.stream.channel.status + '</p></div>');
    } else if (data.status == 422) {
      $("#streamresults").append('<div class="streaminfo-off"><p><a href="https://www.twitch.tv/' + twitchstream + '">' + twitchstream + '</a> | Channel Closed</p></div>');
    } else {
      $("#streamresults").append('<div class="streaminfo-off"><p><a href="https://www.twitch.tv/' + twitchstream + '">' + twitchstream + '</a> | Offline</p></div>');
    }
  });

}

$("#status").on("click", function() {

  $(".streaminfo-off").toggle(300);
  //$(".streaminfo-on").show(500);
  if ($("#status span").text() == "Show Online Only") {
    $("#status span").text("Show All Streams");
  }
  else if ($("#status span").text() == "Show All Streams") {
    $("#status span").text("Show Online Only");
  }
});

$("#refresh").on("click", function() {
  $("#streamresults").empty();
  twitchStreams.forEach(function(item) {
    getTwitch(item);
  });
});