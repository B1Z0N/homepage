// enable format on string objects too

String.prototype.format = function() {
    var args = arguments;
    return this.replace(/\{(\d+)\}/g, function(a, num) {
      return args[num] || a;
    });
  };
  
  //////////////////////////////////////////////////
  //// scrolling code
  //////////////////////////////////////////////////
  
  function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
      return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
  }
  
  function elmYPosition(eID) {
    var elm = document.getElementById(eID);
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
      node = node.offsetParent;
      y += node.offsetTop;
    }
    return y;
  }
  
  function smoothScroll(eID) {
    var startY = currentYPosition();
    var stopY = elmYPosition(eID);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
      scrollTo(0, stopY);
      return;
    }
    var speed = Math.round(distance / 25);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
      for (var i = startY; i < stopY; i += step) {
        setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
        leapY += step;
        if (leapY > stopY) leapY = stopY;
        timer++;
      }
      return;
    }
    for (var i = startY; i > stopY; i -= step) {
      setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
      leapY -= step;
      if (leapY < stopY) leapY = stopY;
      timer++;
    }
  }
  
  //////////////////////////////////////////////////
  //// list animation
  //////////////////////////////////////////////////
  
  const listFadeIn = function() {
    $("li")
      .delay(100)
      .each(function(i) {
        $(this)
          .delay(100 * i)
          .queue(function() {
            $(this).addClass("show");
          });
      });
  };
  
  //////////////////////////////////////////////////
  //// array random shuffle
  //////////////////////////////////////////////////
  
  function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

//////////////////////////////////////////////////
//// get new color to the topic tab
//////////////////////////////////////////////////

const getTabStyleNumber = (function anonymous() {
  let i = 1;
  return () => (i++ % 6) + 1;
})();
