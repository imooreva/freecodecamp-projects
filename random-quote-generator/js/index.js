$(document).ready(function() {
  //fadeQuote();
  newQuote();
  //changeColor();  
});

$("#newq").on("click", function() {
  //$("#quote").empty();
  fadeQuote();
  newQuote();
  changeColor();  
});

function newQuote() {
  var url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
  $.getJSON(url, function(data) {
    var qt = data.quoteText;
    var qa = data.quoteAuthor;
    var ql = data.quoteLink;
    if (data.quoteAuthor == "") {
      var qa = "Unknown";
    }
    $("#quote").html(qt + "<br>&#8211; " + qa);
    $("#tweetq").attr("href", "https://twitter.com/intent/tweet/?text=" + qt + " - " + qa);    
  });
}

function changeColor() {
  //used colorschemedesigner.com to pick complimentary colors
  var colorBg = [
    ["#0F4DA8", "#284B7E", "#052F6D", "#437DD4", "#6A94D4"],
    ["#00AF64", "#218359", "#007241", "#36D792", "#61D7A4"],
    ["#FFF200", "#BFB830", "#A69D00", "#FFF540", "#FFF873"]
  ];
  var colorQt = [
    ["#FFA100", "#BF8A30", "#A66900", "#FFB840", "#FFCB73"],
    ["#FF4900", "#BF5930", "#A62F00", "#FF7640", "#FF9B73"],
    ["#600CAC", "#562781", "#3C0470", "#8E41D5", "#A168D5"]
  ];
  var x = Math.floor((Math.random() * 2) + 1);
  var y = Math.floor((Math.random() * 4) + 1);
  $("html").css("background-color", colorBg[x][y]);
  $("#quote").css("background-color", colorQt[x][y]);
}

function fadeQuote() {
  $("#quote").fadeOut(50, function() {
    $("#quote").fadeIn(1200);
  });
}