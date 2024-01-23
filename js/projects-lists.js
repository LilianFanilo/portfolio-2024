import devProjectsData from "../data/dev-projects-data.js";
import designProjectsData from "../data/design-projects-data.js";
import videoProjectsData from "../data/video-projects-data.js";

let devProjectList = document.querySelector(".dev-projects .project-list ul");

let designProjectList = document.querySelector(
  ".design-projects .project-list ul",
);

let videoProjectList = document.querySelector(
  ".video-projects .project-list ul",
);

devProjectsData.forEach((project) => {
  const { title, date, img } = project;
  devProjectList.innerHTML += `
          <li class="project-item" style="background: linear-gradient(180deg, rgba(255, 255, 255, 0.30) 17.63%, #FFF 100%), url('${img}'), lightgray 50%;background-size:cover">
              <h3>${title}</h3>
              <span>${date}</span>
          </li>
      `;
});

designProjectsData.forEach((project) => {
  const { title, date, img } = project;
  designProjectList.innerHTML += `
        <li class="project-item" style="background: linear-gradient(180deg, rgba(255, 255, 255, 0.30) 17.63%, #FFF 100%), url('${img}'), lightgray 50%;background-size:cover">
            <h3>${title}</h3>
            <span>${date}</span>
        </li>
    `;
});

videoProjectsData.forEach((project) => {
  const { title, date, img } = project;
  videoProjectList.innerHTML += `
          <li class="project-item" style="background: linear-gradient(180deg, rgba(255, 255, 255, 0.30) 17.63%, #FFF 100%), url('${img}'), lightgray 50%;background-size:cover">
              <h3>${title}</h3>
              <span>${date}</span>
          </li>
      `;
});
