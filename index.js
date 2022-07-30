const projects = [

  {
    id: "project-6",
    name: "Budget App",
    github: "https://github.com/Thermiee/Budget-app",
    live: "thermiee-app.herokuapp.com/",
    imgsrc: "img/budget.png",
    technologies: ['Ruby', 'Rails', 'Bootstrap', 'Javascript', 'Rubocop', 'Rspec', 'Postgres'],
    description: "This is a mobile web application where you can manage your budget whereby you have a list of transactions associated with a category, so that users can see how much money they spent and on what they spent their money on.",
  },
  {
    id: "project-5",
    name: "Math Magicians",
    github: "https://github.com/Thermiee/Math-magicians",
    live: "https://brilliant-semifreddo-5fcc98.netlify.app/",
    imgsrc: "img/calculator.png",
    technologies: ['React', 'Bootstrap', 'css'],
    description: "This is to set up react for my projects and we actually created a well functioning calculator app with primary click events for example the addition, multiplication, division, subtraction and more 'add on' you can see the look of my app in  the README.mb file...this is a calculator clone app",
  },
  {
    id: "project-4",
    name: "Anime-World",
    github: "https://github.com/Thermiee/React-Capstone",
    live: "https://graceful-baklava-ba0862.netlify.app/",
    imgsrc: "img/anime.png",
    technologies: ['React', 'Redux', 'CSS'],
    description: "A mobile web application that will return list of some of my favorite animes and some facts from a provided Api ",
  },
  {
    id: "project-3",
    name: "space-travelers-hub",
    github: "https://github.com/Thermiee/space-travelers-hub",
    live: "bavon-emmanuel-space-hub.herokuapp.com/",
    imgsrc: "img/space.png",
    technologies: ['React', 'Redux', 'CSS'],
    description: " The web application provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions using real live data from the SpaceX API.",
  },
  {
    id: "project-2",
    name: "Show Time",
    github: "https://github.com/Thermiee/Javascript-Capstone",
    live: "https://show-time-202.netlify.app/",
    imgsrc: "img/showtime.png",
    technologies: ['Javascript', 'HTML', 'CSS'],
    description: "ShowTime is a web application based on an external TV Maze API. The API provides data about TV Shows. We then built the webapp around it. The webapp has 2 user interfaces (pages): The Homepage and the Comment modal. On the Homepage, each Show can be liked and commented on."
  },
  {
    id: "project-1",
    name: "BookStore",
    github: "https://github.com/Thermiee/Book-Store",
    live: "polite-manatee-2320a7.netlify.app/",
    imgsrc: "img/bookstore.png",
    technologies: ['React', 'Redux', 'CSS'],
    description: "The Book-store is a website that Displays a list of books, Add a book and Remove a selected book."
  },
  {
    id: "project-7",
    name: "Smart icon",
    github: "https://github.com/Thermiee/smart-brain-ui",
    live: "http://smart-icon.herokuapp.com/",
    imgsrc: "img/smart-icon.png",
    technologies: ['React', 'Node', 'Express', 'MongoDB'],
    description: "A react app that fetches data from the brain API and displays it in a grid format.",
  },
];


document.getElementById("myProjects").innerHTML = projects.map(project => 
  `
  <div class="col-md-6 col-lg-4 mb-5">
    <div class="text-center position-relative">
      <div>
        <img src="${project.imgsrc}" alt="${project.name}"  class="img-fluid" />
      </div>
      <div class="position-absolute arrow-pos shadow bg-fair">
        <a href="${project.live}" target="_blank" class="text-white">
          <i class="fas fa-lg fa-arrow-up text-white rotated-arrow"></i>
        </a>
      </div>
    </div>
    <div class="d-flex mt-4">
      <a href="${project.github}" target="_blank" class="btn btn-danger text-light me-3 rounded-0"><i class="fab fa-github"></i></a>
      <a href="${project.live}" target="_blank" class="btn border rounded-0 me-3 border-danger text-warning"><i class="fas fa-arrow-up text-light rotated-arrow"></i></a>
      <a class="btn me-3 text-white rounded-0 border" data-bs-toggle="modal" data-bs-target="#${project.id}">${project.name}</a>
    </div>
    <div class="modal fade" id="${project.id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content bg-fair">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">${project.name}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div>
              <img src="${project.imgsrc}" alt="${project.name}"  class="img-fluid" />
            </div>
            <div class="mt-5">
              <h5>Project Technologies:</h5>
              ${project.technologies.join(', ')}
            </div>
            <div class="mt-5">
              <h5>About the Project:</h5>
              ${project.description}
            </div>
          </div>
          <div class="modal-footer">
          <a href="${project.github}" target="_blank" class="btn btn-danger me-3 rounded-0"><i class="fab fa-github"></i> Github Link</a>
          <a href="${project.live}" target="_blank" class="btn border rounded-0 me-3 border-danger text-light"><i class="fas fa-arrow-up text-info rotated-arrow"></i> Live Link</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
).join('');

const count = document.getElementById("projectCounter").textContent = projects.length;
