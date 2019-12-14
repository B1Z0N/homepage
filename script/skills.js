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
        .delay(300 * i)
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
//// site's data
//////////////////////////////////////////////////

const groupTemplate = `
    <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 pt-3">
            <div class="box{0}" 
              onclick="insertList({1}); listFadeIn(this); smoothScroll('skill-list');">
                <div class="hvr-grow">
                    <h3>{2}</h3>
                    <img src="../img/skills/{3}">
                </div>
            </div>
    </div>
`;
var i = 1;
var skillGroup;

//////////////////////////////////////////////////
//// site's code
//////////////////////////////////////////////////

const getBoxStyleNumber = () => {
  ++i;
  return (i % 6) + 1;
};
const addTab = (title, lst, icon) => {
  lst = "[ '" + lst.join("', '") + "' ]";
  skillGroup.innerHTML += groupTemplate.format(
    getBoxStyleNumber(),
    lst,
    title,
    icon
  );
};
const removeAllTabs = () => {
  skillGroup.innerHTML = "";
};
const insertList = arr => {
  const lst = document.getElementById("skill-list");
  arr = shuffle([...new Set(arr)]);
  lst.innerHTML = "";
  arr.forEach(elem => {
    lst.innerHTML += `<li><h3>${elem}</h3></li>`;
  });
};

const groupByPL = () => {
  console.log(1);
  const PLs = {'C++' : 'cpp.png', 'Python' : 'python.png', 'JS' : 'js.png', 'C' : 'c.png'};
  for (var pl in PLs) {
    if (PLs.hasOwnProperty(pl)) {
      PLs[pl] = { 'skills' : [], 'icon' : PLs[pl]};

      for (let skill of skills)
        if (skill['pl'] === pl || skill['pl'].includes(pl))
          PLs[pl]['skills'].push(skill['skill']);

      addTab(pl, PLs[pl]['skills'], PLs[pl]['icon']);
    }
  }
  console.log(PLs);
};

const groupByLvl = () => {
  console.log(2);
  const LVLs = ["beginner", "average", "advanced"];
  LVLs.forEach(elem => addTab(elem, [], elem + ".png"));
};
const groupByHardSoft = () => {
  console.log(3);
  ["hard", "soft"].forEach(elem => addTab(elem, [], elem + ".png"));
};
const groupByPosition = () => {
  console.log(4);
  const positions = ["backend"];
  positions.forEach(elem => addTab(elem, [], elem + ".png"));
};

const groupSkillsBy = function(val) {
  insertList([]);
  const groupByFunctions = {
    pl: groupByPL,
    lvl: groupByLvl,
    hard_soft: groupByHardSoft,
    position: groupByPosition
  };
  if (!Object.keys(groupByFunctions).includes(val)) return;
  removeAllTabs();
  return groupByFunctions[val]();
};

window.onload = () => {
  skillGroup = document.getElementById("skillGroup");
  groupSkillsBy("pl");
};
