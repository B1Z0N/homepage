const resumeHTML = (resume, boxNumber) => `<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 pt-3">
    <div class="box${boxNumber}" onclick='showPDF("${resume.file}");'>
        <div class="hvr-grow">
            <h3>${resume.title}</h3>
            <img src="../img/resume/${resume.icon}" />
            ${resume.updated}
        </div>
    </div>
</div>`;

const initResumes = (node, resumes) => resumes.forEach(
    resume => node.innerHTML += resumeHTML(resume, getTabStyleNumber())
);

window.onload = () => {
    initResumes(
        document.getElementById("resumeList"), resumes
    );
};
