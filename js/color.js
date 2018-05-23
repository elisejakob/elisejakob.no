$(document).ready(function() {

  function randomColor(brightness) {
      function randomChannel(brightness){
          var r = 255 - brightness;
          var n = 0|((Math.random() * r) + brightness);
          return n;
      }
      return randomChannel(brightness) + ", " + randomChannel(brightness) + ", " + randomChannel(brightness);
  }

  $(".letter").hover(function() {
      var rgb = "rgb(" + randomColor(30) + ")";
      $(this).css("color", rgb);
  })
})