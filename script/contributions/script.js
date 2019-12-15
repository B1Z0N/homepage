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

// display contributions data from contributions object

const displayContributions = () => {
  const contribList = document.getElementById("project-list");
  var i = Math.floor(Math.random() * 1000);
  for (let contrib of contributions) {
    contribList.innerHTML += contribTemplate.format(
      contrib["link"],
      (++i % 6) + 1,
      contrib["title"],
      contrib["language"],
      contrib["status"]
    );
  }
};

window.onload = displayContributions;
