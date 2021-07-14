//Draw Canvas
var dynamicWidth, dynamicHeight, ctx;
var drawCanvas = function() {
  var getCanvas = document.querySelector("canvas");
  if (getCanvas != undefined) {
    getCanvas.parentNode.removeChild(getCanvas);
  }
  var cns = document.createElement("canvas");
  document.body.appendChild(cns);
  dynamicWidth = window.innerWidth;
  dynamicHeight = window.innerHeight;
  ctx = cns.getContext("2d");
  cns.width = dynamicWidth;
  cns.height = dynamicHeight;
  ctx.fillStyle = "#090832";
  ctx.fillRect(0, 0, dynamicWidth, dynamicHeight);
};

//Particles Contructor
var init = function(ev) {
  var randomiser = function(param) {
    return Math.round(Math.random() * param);
  };
  var dynamicX = ev.clientX;
  var dynamicY = ev.clientY;
  if (dynamicX == undefined && dynamicY == undefined) {
    dynamicX = dynamicWidth / 2;
    dynamicY = dynamicHeight / 2;
  }
  var particles = new Array();
  var particle = function() {
    this.r = randomiser(450);
    this.x = dynamicX + randomiser(150);
    this.y = dynamicY + randomiser(150);
    this.hue =
      "#" +
      Math.random()
        .toString(16)
        .substr(2, 8);
  };

  for (var i = 0; i < 100; i++) {
    particles[i] = new particle();
  }

  //Frame Constructor
  var drawCircle = function(param) {
    ctx.beginPath();
    ctx.fillStyle = particles[param].hue;
    ctx.arc(
      particles[param].x,
      particles[param].y,
      particles[param].r,
      0,
      Math.PI * 2
    );
    ctx.fill();
  };

  //Frame Repeater
  function rePaint() {
    var runIt = false;
    ctx.clearRect(0, 0, dynamicWidth, dynamicHeight);
    ctx.fillStyle = "#090832";
    ctx.fillRect(0, 0, dynamicWidth, dynamicHeight);
    for (var j = 0; j < 100; j++) {
      drawCircle(j);
      if (particles[j].r > 0) {
        particles[j].r--;
        runIt = true;
      }
    }
    if (runIt == true) {
      window.requestAnimationFrame(rePaint);
    } else {
      window.cancelAnimationFrame(rePaint);
    }
  }
  window.requestAnimationFrame(rePaint);
};

//Listeners
window.addEventListener("load", function(ev) {
  drawCanvas();
  init(ev);
});
window.addEventListener("resize", function(ev) {
  drawCanvas();
  init(ev);
});
window.addEventListener("click", function(ev) {
  init(ev);
});
