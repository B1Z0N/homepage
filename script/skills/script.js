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
//// site's data and initial setup
//////////////////////////////////////////////////

var groupTemplate = `
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

window.onload = () => {
  skillGroup = document.getElementById("skillGroup");
  groupSkillsBy("pl");
};

//////////////////////////////////////////////////
//// working with tabs
//////////////////////////////////////////////////

// transform [tabName1, ...] to { tabName1 : tabName1 + '.png', ... }
// for passing icon filenames to functions
const iconify = tabArr => {
  var tabIconMap = {};
  tabArr.forEach(elem => {
    tabIconMap[elem] = elem + ".png";
  });

  return tabIconMap;
};
// stringify list of { skill, lvl } to inject in html
const stringifySkillList = skills => {
  return JSON.stringify(skills).replace(/"/g, '\'');;
}
const getTabStyleNumber = () => {
  ++i;
  return (i % 6) + 1;
};
const addTab = (title, lst, icon) => {
  console.log(lst);
  lst = stringifySkillList(lst);
  console.log(lst);
  skillGroup.innerHTML += groupTemplate.format(
    getTabStyleNumber(),
    lst,
    title,
    icon
  );
};
const removeAllTabs = () => {
  skillGroup.innerHTML = "";
};

//////////////////////////////////////////////////
//// working with skill list
//////////////////////////////////////////////////

// inserts skill list into html
const insertList = (arr) => {
  const lst = document.getElementById("skill-list");
  arr = shuffle([...new Set(arr)]);
  lst.innerHTML = "";
  arr.forEach(elem => {
    var style = '';
    if (elem['lvl'] === 'beginner') {
      style = "style='color: #a0d468'";
    } else if (elem['lvl'] === 'average') {
      style = "style='color: #ffce54'";
    } else if (elem['lvl'] === 'advanced') {
      style = "style='color: #af361d'";
    }
    lst.innerHTML += `<li><h3 ${style} >${elem['skill']}</h3></li>`;
  });
};

// add tabs grouped by `by`
// setup tab onclick event to add appropriate skill list
const addTabAndList = (tabs, by) => {
  for (var tab in tabs) {
    if (tabs.hasOwnProperty(tab)) {
      val = tabs[tab] = { skills: [], icon: tabs[tab] };

      for (let skill of skills) {
        var res;
        if (typeof skill[by] == 'string') {
          res = skill[by] === tab || skill[by] === 'any';
        } else {
          res = skill[by].includes(tab);
        }

        if (res) {
          val['skills'].push({ 'skill' : skill['skill'], 'lvl' : skill['lvl']});
        }
      }

      addTab(tab, val['skills'], val['icon']);
    }
  }
};

//////////////////////////////////////////////////
//// various group by functions
//////////////////////////////////////////////////

const groupByPL = () => {
  const PLs = {
    "C++": "cpp.png",
    Python: "python.png",
    JS: "js.png",
    C: "c.png"
  };

  addTabAndList(PLs, "pl");
};

const groupByLvl = () => {
  addTabAndList(iconify(["beginner", "average", "advanced"]), "lvl");
};

const groupByHardSoft = () => {
  addTabAndList(iconify(["hard", "soft"]), "hard_soft");
};
const groupByPosition = () => {
  addTabAndList(iconify(["backend"]), "position");
};

// general function that calls one of groupBy* functions
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
