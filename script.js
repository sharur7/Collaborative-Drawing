var config = {
  apiKey: 'AIxaSyGsAkHke9lXEU_97a8rYpMn7gOH3eWDxrM',
  authDomain: 'collaborative-sketch.firebaseapp.com',
  databaseURL: 'https://collaborative-sketch.firebaseio.com',
  storageBucket: 'collaborative-sketch.appspot.com'
};
firebase.initializeApp(config)

var pointsData = firebase.database().ref();
var points = [];

function setup() {
  var canvas = createCanvas(400, 400);
  background(255);
  fill(0);
  pointsData.on('child_added', function(point) {
    points.push(point.val());
  });
 / canvas.mousePressed(drawPoint);*/
 

  canvas.mouseMoved(function () {
    if (mouseIsPressed) {
      drawPoint();
    }
  });
  

}


function draw() {
  background(255);
  for (var i = 0; i < points.length; i++) {
    var point = points[i];
    /*circle(point.x, point.y, 5);*/
    ellipse(point.x, point.y, 7, 8);
  }
}
function drawPoint() {
  pointsData.push({ x: mouseX, y: mouseY })
}


$('#saveDrawing').on('click', saveDrawing);

function saveDrawing() {
  saveCanvas();
}

$('#clearDrawing').on('click', clearDrawing);

function clearDrawing() {
  pointsData.remove();
  points = [];
}

