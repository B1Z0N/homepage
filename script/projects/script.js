// project template
const projectTemplate = `
            <a href="{0}">
                    <div class="box{1} mt-3">
                        <p>
                            <h1>
                                {2}
                            </h1>
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

const displayProjects = () => {
  const projectList = document.getElementById("project-list");
  var i = Math.floor(Math.random() * 1000);
  for (let project of projects) {
    projectList.innerHTML += projectTemplate.format(
      project["link"],
      (++i % 6) + 1,
      project["title"],
      project["language"],
      project["date"]
    );
  }
};

window.onload = displayProjects;
