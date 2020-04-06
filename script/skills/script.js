

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

// transform { topicName1 : iconName1, topicName2 : null, ... }; 
// to { topicName1 : iconName1, topicName2 : topicName2 + '.png'}; 
const iconifyMapping = topics => {
  for (var tp in topics) {
    if (topics[tp] === null) {
      topics[tp] = tp.toLowerCase() + '.png';
    } 
  }

  return topics;
};

// transform [topicName1, ...] to { topicName1 : topicName1 + '.png', ... }
const iconifyArray = topics => {
  var topicIconMap = {};
  topics.forEach(elem => {
    topicIconMap[elem] = elem + ".png";
  });

  return topicIconMap;
};

// for passing icon filenames to functions
const iconify = topics => Array.isArray(topics) ? iconifyArray(topics) : iconifyMapping(topics); 



// stringify list of { skill, lvl } to inject in html
const stringifySkillList = skills => {
  return JSON.stringify(skills).replace(/"/g, '\'');
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

const groupByPL = () => addTabAndList(iconify(PLs), "pl");
const groupByLvl = () => addTabAndList(iconify(lvls), "lvl");
const groupByHardSoft = () => addTabAndList(iconify(skillType), "hard_soft");
const groupByPosition = () => addTabAndList(iconify(position), "position");

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
