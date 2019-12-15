// project template
const projectTemplate = `
            <a href="{0}">
                    <div class="box{1} mt-3">
                        <p>
                            <h2>
                                {2}
                            </h2>
                        </p>
                        <p>
                            <h3>
                                {3}
                            </h3>
                        </p>
                    <span class="badge badge-light badge-pill">{4}</span>
                </div>
            </a>
        `;

// display projects data form projects object

var orderBy;
var lang;

const orderProjectsBy = arr => {
  const cmpDate = (a, b) => {
    return Date.parse(a["date"]) - Date.parse(b["date"]);
  };
  const cmp = {
    "-date": cmpDate,
    date: (a, b) => {
      return -cmpDate(a, b);
    }
  };

  return arr.sort(cmp[orderBy]);
};

const languageFilterBy = arr => {
  var res = [];
  for (let project of arr) {
    var include;
    if (typeof project["language"] === "string") {
      include = project["language"] === lang || project["language"] === "any";
    } else {
      include = project["language"].includes(lang);
    }

    if (lang === "any" || include === true) {
      res.push(project);
    }
  }

  return res;
};

const displayProjects = arr => {
  var i = Math.floor(Math.random() * 1000);

  $("#__pagination").pagination({
    dataSource: arr,
    callback: function(projects, pagination) {
      // template method of yourself
      var html = '';
      for (let project of projects) {
        html += projectTemplate.format(
          project["link"],
          (++i % 6) + 1,
          project["title"],
          project["language"],
          project["date"]
        );

        $("#project-list").html(html);
      }
    }
  });
};

const filterAndSort = (_orderBy = -1, _lang = -1) => {
  orderBy = _orderBy === -1 ? orderBy : _orderBy;
  lang = _lang === -1 ? lang : _lang;
  console.log(orderBy);
  return displayProjects(orderProjectsBy(languageFilterBy(projects)));
};

window.onload = () => {
  orderBy = document.getElementById("orderBySelect").options;
  orderBy = orderBy[orderBy.selectedIndex].value;
  lang = document.getElementById("languageSelect").options;
  lang = lang[lang.selectedIndex].value;

  filterAndSort();
};
