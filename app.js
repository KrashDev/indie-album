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
    var angles = {
      x1: '0',
      x2: '0',
      y1: '600',
      y2: '600'
    }
    // var angle = Math.round(Math.random() * 360);
    // var angle = angles[~~(Math.random() * angles.length)]
    // var gradient = "linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ")";

    // $("#main").css('background', gradient);
    // $("#gradient-ify").css('background', gradient);
    // document.getElementById("output").innerHTML = gradient;
    return [newColor1, newColor2, angles];
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
    return 'images/' + randShape + '.svg';
  }

  //click button for random shape image
  $('#shape-ify').click(randomShape);

  //--------------------------------------------------

  function randomName() {
    var nameArray = ['Crepe Whistle', 'Tiara Tango', 'Doctorship', 'Hotdog Water', 'Friend Fries', 'Brobot', 'Victory Van', 'MockMeta', 'Chrome Couch', 'Vanilla Gorilla', 'Earfection', 'Ramen Party', 'Samurai Hi-hit', 'Shogun', 'Fruit of the Boom'];
    var randName = nameArray[Math.floor(Math.random() * nameArray.length)];
    return randName;
  }

  //click button for random name
  $('#name-ify').click(randomName);

  //--------------------------------------------------

  function randomFont() {
    var fontArray = ['"Montserrat", sans-serif', '"Poppins", sans-serif', '"Ubuntu", sans-serif', '"Pacifico", cursive', '"Dancing Script", cursive', '"Comfortaa", cursive', '"Permanent Marker", cursive', '"Satisfy", cursive', '"Caveat", cursive', '"Poiret One", cursive', '"Sacramento", cursive', '"Josefin Slab", serif', '"Raleway", sans-serif'];
    var randFont = fontArray[Math.floor(Math.random() * fontArray.length)];
    return randFont;
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


  //inital set up
  setTimeout(function() {
    var buttonColor = $('#main').css('background');
    $('button#gradient-ify').css('background', buttonColor);
    var randShape = $('#random-shape').find('img').clone();
    $('#shape-ify').append(randShape);
  }, 10);


  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  var img = new Image();
  img.addEventListener('load', function() {
    // Draw backgruond image that was loaded
    ctx.drawImage(img, 0, 0);
    // Start gradient
    var gradient = generate();
    var angle = gradient[2]
    // Save transparency (1)
    ctx.save();
    // Set transparency to 0.5 for gradient
    ctx.globalAlpha = 0.5;
    var grd = ctx.createLinearGradient(angle.x1, angle.x2, angle.y1, angle.y2);
    grd.addColorStop(0, gradient[0]);
    grd.addColorStop(1, gradient[1]);
    // Set fill style for fillRect to the gradient we made
    ctx.fillStyle = grd;
    // Fill the whole image
    ctx.fillRect(0, 0, 600, 600);
    // Restore the transparency back to 1 so the shape isn't transparent
    ctx.restore();
    // New shape image to load
    img = new Image();
    img.addEventListener('load', function() {
      ctx.drawImage(img, 230, 80, 150, 150);
      ctx.fillStyle = 'white';
      ctx.font = '30px ' + randomFont();
      ctx.fillText(randomName(), 10, 50);
      console.log(canvas.toDataURL())
    })
    img.src = randomShape();
    img.crossOrigin = 'Anonymous';
  }, false);
  img.src = 'https://picsum.photos/g/600/600?random';
  img.crossOrigin = 'Anonymous';

  // unsplashed sends requests to https://api.unsplash.com/

  //unsplashed keys
  // var accessKey = '7e8c1fe38d06dc0cbe27eacff076918323de5dff16c4d2829c9f5802c216f160';
  // var secretKey = 'd1a6c4fdd01075e88e5529ed195d8a172f010f8048ce94d22416441d00176a67';

  //load gradient on page load
  document.onload = generate();


});