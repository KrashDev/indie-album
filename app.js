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

    $(".main").css('background', gradient);
    $("#gradient-ify").css('background', gradient);
    // document.getElementById("output").innerHTML = gradient;

  }

  //click button to change gradient
  $('#gradient-ify').click(generate);

  //--------------------------------------------------

  function randomPhoto() {
    var picArray = ['sign', 'light', 'city', 'forest', 'park', 'nature', 'calm', 'quiet', 'architecture', 'woman', 'man', 'fire', 'water', 'earth', 'sky', 'dog', 'cat', 'food', 'vegetable', 'winter', 'snow', 'animal', 'art'];
    var randPic = picArray[Math.floor(Math.random() * picArray.length)];
    // $('#random-photo').attr('src', 'https://api.unsplash.com/photos/?client_id=' + accessKey + '');
    $('#random-photo img').attr('src', 'https://source.unsplash.com/600x600/daily?' + randPic + '');
  }

  //click button for random image
  $('#image-ify').click(randomPhoto);

  //--------------------------------------------------

  function randomShape() {
    var shapeArray = ['shape-1', 'shape-2', 'shape-3', 'shape-4', 'shape-5', 'shape-6', 'shape-7'];
    var randShape = shapeArray[Math.floor(Math.random() * shapeArray.length)];
    $('#random-shape img').attr('src', 'images/' + randShape + '.svg');
  }

  //click button for random shape image
  $('#shape-ify').click(randomShape);

  //--------------------------------------------------

  function randomName() {
    var nameArray = ['Crepe Whistle', 'Tiara Tango', 'Doctorship', 'Hotdog Water', 'Friend Fries', 'Brobot', 'Victory Van', 'MockMeta', 'Chrome Couch', 'Vanilla Gorilla', 'Earfection', 'Ramen Party', 'Samurai Hi-hit', 'Shogun', 'Fruit of the Boom'];
    var randName = nameArray[Math.floor(Math.random() * nameArray.length)];
    $('#random-name').text(randName);
  }

  //click button for random name
  $('#name-ify').click(randomName);

  //--------------------------------------------------

  function randomFont() {
    var fontArray = ['"Montserrat", sans-serif', '"Poppins", sans-serif', '"Ubuntu", sans-serif', '"Pacifico", cursive', '"Dancing Script", cursive', '"Comfortaa", cursive', '"Permanent Marker", cursive', '"Satisfy", cursive', '"Caveat", cursive', '"Poiret One", cursive', '"Sacramento", cursive', '"Josefin Slab", serif', '"Raleway", sans-serif'];
    var randFont = fontArray[Math.floor(Math.random() * fontArray.length)];
    $('#random-name').css('font-family', randFont);
  }

  //click button for random shape image
  $('#font-ify').click(randomFont);


  function randofy() {
    var timer = Math.floor(Math.random() * 4) + 1;
    var xTimer = timer * 1000;
    console.log(xTimer);
    if ($(this).hasClass('active')) {
      return;
    }
    setInterval(function() {
      randomShape();
      generate();
      randomPhoto();
      randomFont();
      randomName();
    }, 1000);

    $(this).toggleClass('active');
  }

  $('#rain-ify').click(randofy);

  //clone Album
  /*
    setTimeout(function() {
      var title = $('.main').clone().css('-webkit-transform', 'scale(.125, .125)');;
      $('.album-clone').append(title);
    }, 1000);
  */
  //inital set up
  setTimeout(function() {
    var buttonColor = $('.main').css('background');
    $('button#gradient-ify').css('background', buttonColor);
    var randShape = $('#random-shape').find('img').clone();
    $('#shape-ify').append(randShape);
  }, 10);



  // unsplashed sends requests to https://api.unsplash.com/

  //unsplashed keys
  // var accessKey = '7e8c1fe38d06dc0cbe27eacff076918323de5dff16c4d2829c9f5802c216f160';
  // var secretKey = 'd1a6c4fdd01075e88e5529ed195d8a172f010f8048ce94d22416441d00176a67';

  //load gradient on page load
  document.onload = generate();


});