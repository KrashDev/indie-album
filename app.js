$(document).ready(function() {



  function generate() {

    var hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e"];

    function populate(a) {
      for (var i = 0; i < 6; i++) {
        var x = Math.round(Math.random() * 14);
        var y = hexValues[x];
        a += y;
      }
      return a;
    }

    var newColor1 = populate('#');
    var newColor2 = populate('#');
    var angle = Math.round(Math.random() * 360);

    var gradient = "linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ")";

    $("#main").css('background', gradient);
    // document.getElementById("output").innerHTML = gradient;

  }

  //click button to change gradient
  $('#rage').click(generate);

  function randomPhoto() {
    var picArray = ['sign', 'light', 'city', 'forest', 'park', 'nature', 'calm', 'quiet', 'architecture', 'woman', 'man', 'fire', 'water', 'earth', 'sky', 'dog', 'cat', 'food', 'vegetable', 'winter', 'snow', 'animal', 'art'];
    var randPic = picArray[Math.floor(Math.random() * picArray.length)];
    // $('#random-photo').attr('src', 'https://api.unsplash.com/photos/?client_id=' + accessKey + '');
    $('#random-photo').attr('src', 'https://source.unsplash.com/600x600/daily?' + randPic + '');
  }

  //click button for random image
  $('#raged').click(randomPhoto);



  // unsplashed sends requests to https://api.unsplash.com/

  //unsplashed keys
  // var accessKey = '7e8c1fe38d06dc0cbe27eacff076918323de5dff16c4d2829c9f5802c216f160';
  // var secretKey = 'd1a6c4fdd01075e88e5529ed195d8a172f010f8048ce94d22416441d00176a67';

  //load gradient on page load
  document.onload = generate();


});