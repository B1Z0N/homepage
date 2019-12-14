String.prototype.format = function () {
    var args = arguments;
    return this.replace(/\{(\d+)\}/g, function (a, num) {
        return args[num] || a
    })
}


const groupTemplate = `
    <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 pt-3">
            <div class="box{0}" onclick="{1}">
                <div class="hvr-grow">
                    <h3>{2}</h3>
                </div>
            </div>
    </div>
`
var i = 1;
var skillGroup;


const getBoxStyleNumber = () => {
    ++i;
    return i % 6 + 1;
};
const addTab = (title, onclickFnName) => {
    skillGroup.innerHTML += groupTemplate.format(
        getBoxStyleNumber(), 
        onclickFnName + `('${title}');`, 
        title
    );
};
const removeAllTabs = () => {
    skillGroup.innerHTML = '';
};


const groupByPL = () => {
    console.log(1);
    const PLs = ['C++', 'Python', 'JS', 'C', ];
    PLs.forEach((elem) => addTab(elem, 'console.log'))
};
const groupByLvl = () => {
    console.log(2);
    const LVLs = ['beginner', 'average', 'advanced'];
    LVLs.forEach((elem) => addTab(elem, 'console.log'));
};
const groupByHardSoft = () => {
    console.log(3);
    ['hard', 'soft'].forEach((elem) => addTab(elem, 'console.log'));
};
const groupByPosition = () => {
    console.log(4);
    const positions = ['backend', ];
    positions.forEach((elem) => addTab(elem, 'console.log'));
};

const groupSkillsBy = function(val) {
    const groupByFunctions = {
        'pl' : groupByPL,
        'lvl' : groupByLvl,
        'hard_soft' : groupByHardSoft,
        'position' : groupByPosition,
    };
    if (!Object.keys(groupByFunctions).includes(val)) return;
    removeAllTabs();
    return groupByFunctions[val]();
};       


window.onload = () => {
    skillGroup = document.getElementById('skillGroup');
    groupSkillsBy('pl');
};
