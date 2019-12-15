// project template
const contribTemplate = `
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

var lang, contribStatus;
// display contributions data from contributions object

const displayContributions = arr => {
  const contribList = document.getElementById("project-list");
  contribList.innerHTML = "";
  var i = Math.floor(Math.random() * 1000);
  for (let contrib of arr) {
    contribList.innerHTML += contribTemplate.format(
      contrib["link"],
      (++i % 6) + 1,
      contrib["title"],
      contrib["language"],
      contrib["status"]
    );
  }
};

const languageFilterBy = arr => {
  var res = [];
  for (let contrib of arr) {
    var include;
    if (typeof contrib["language"] === "string") {
      include = contrib["language"] === lang || contrib["language"] === "any";
    } else {
      include = contrib["language"].includes(lang);
    }

    if (lang === "any" || include === true) {
      res.push(contrib);
    }
  }

  return res;
};

const statusFilterBy = arr => {
  var res = [];
  for (let contrib of contributions) {
    var include;
    if (
      contribStatus === "any" ||
      (typeof contrib["status"] === "string" && contrib["status"] === contribStatus)
    ) {
      res.push(contrib);
    }
  }

  return res;
};

const fullFilter = (_lang = -1, _status = -1) => {
  lang = _lang === -1 ? lang : _lang;
  contribStatus = _status === -1 ? contribStatus : _status;
  displayContributions(languageFilterBy(statusFilterBy(contributions)));
};

window.onload = () => {
  lang = document.getElementById("languageSelect").options;
  lang = lang[lang.selectedIndex].value;
  contribStatus = document.getElementById("statusSelect").options;
  contribStatus = contribStatus[contribStatus.selectedIndex].value;

  fullFilter();
};
