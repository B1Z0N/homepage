//////////////////////////////////////////////////
//// site's data and initial setup
//////////////////////////////////////////////////

var timelineTemplate = `
        <div class="timeline">
            <a href="{2}" class="timeline-content">
                <div class="timeline-icon">
                    <i class="fa"></i>
                </div>
                <h3 class="title">{0} | {1}</h3>
                <p class="description">
                    {3} - {4}
                </p>
            </a>
        </div>
        `;

var timeline;

window.onload = () => {
  timeline = document.getElementsByClassName("main-timeline")[0];
  displayData(experience);
};

//////////////////////////////////////////////////
//// working with tabs
//////////////////////////////////////////////////

const displayData = (experience) => {
  for (const data of experience) {
    addTab(data);
  }
};

const addTab = ({ name, position, link, from, to}) => {
  timeline.innerHTML += timelineTemplate.format(name, position, link, from, to);
};
