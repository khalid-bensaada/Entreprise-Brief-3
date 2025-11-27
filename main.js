const btnAdd = document.getElementById("btnAdd");
const Form = document.getElementById("Form");
const saveWorker = document.getElementById("saveWorker");
const closeForm = document.getElementById("closeForm");
 
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const photo = document.getElementById("photo");
const role = document.getElementById("role");

const expCompany = document.getElementById("expCompany");
const expRole = document.getElementById("expRole");
const expStart = document.getElementById("expStart");
const expEnd = document.getElementById("expEnd");
const addExp = document.getElementById("addExp");
const experienceList = document.getElementById("experienceList");

const popupSelect = document.getElementById("popupSelect");
const popupList = document.getElementById("popupList");
const closePopup = document.getElementById("closePopup");

const profile = document.getElementById("profile");
const profileName = document.getElementById("profileName");
const profilePhoto = document.getElementById("profilePhoto");
const profileRole = document.getElementById("profileRole");
const profileEmail = document.getElementById("profileEmail");
const profilePhone = document.getElementById("profilePhone");
const profileExperiences = document.getElementById("profileExperiences");
const closeProfile = document.getElementById("closeProfile");

const workerSpace = document.getElementById("workerSpace");

const rooms = {
  roomOne: document.getElementById("roomOne"),
  roomTwo: document.getElementById("roomTwo"),
  roomTree: document.getElementById("roomTree"),
  roomFor: document.getElementById("roomFor"),
  roomFive: document.getElementById("roomFive"),
  roomsx: document.getElementById("roomsx")
};

let workers = JSON.parse(localStorage.getItem("workers")) || [];
let experiences = [];

// ila clicka 3la add worker tban lformul
btnAdd.addEventListener("click", function () {
  Form.classList.remove("hidden");
});

// ila click 3la close y5rj mn lform
closeForm.addEventListener("click", function () {
  
  renderExperienceList();
  Form.classList.add("hidden");
});

//ila clicka 3la seva ytseva l worker walakin bxorot
saveWorker.addEventListener("click", function () {
  if (fullName.value === "" || email.value === "" || photo.value === "" || phone.value === "") {
    alert("Enter all formations");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    alert("Invalid email!");
    return;
  }

  let copiedExperiences = [];
  for (let i = 0; i < experiences.length; i++) {
    copiedExperiences.push(experiences[i]);
  }

  let worker = {
    id: Date.now(),
    name: fullName.value,
    email: email.value,
    phone: phone.value,
    photo: photo.value,
    role: role.value,
    experiences: copiedExperiences,
    room: null
  };

  workers.push(worker);
  experiences = [];

  saveData();
  renderWorkers();
  clearForm();
});

// ila clicka 3la addexperience kyzid dik experience fi l array
addExp.addEventListener("click", function () {
  let exp = {
    id: Date.now(),
    company: "",
    role: "",
    start: "",
    end: ""
  };

  experiences.push(exp);
  renderExperienceList();
});

// kanbyn les experiences fi page 
function renderExperienceList() {
  experienceList.innerHTML = "";

  experiences.forEach((exp, index) => {
    let div = document.createElement("div");
    div.className =
      "bg-white border p-3 rounded shadow-sm mb-3 flex flex-col gap-3";

    div.innerHTML = `
      <div class="grid grid-cols-2 gap-3">
        <div>
          <input class="border p-2 rounded w-full" type="text" value="${exp.role}" placeholder="Titre du poste">
        </div>
        <div>
          <input class="border p-2 rounded w-full" type="text" value="${exp.company}" placeholder="Entreprise">
        </div>
        <div>
          <input class="border p-2 rounded w-full" type="date" value="${exp.start}">
        </div>
        <div>
          <input class="border p-2 rounded w-full" type="date" value="${exp.end}">
        </div>
      </div>
      <button class="deleteExp bg-red-500 text-white px-3 py-1 rounded w-fit self-end">
         Delete
      </button>
    `;

    let inputs = div.querySelectorAll("input");

    inputs[0].addEventListener("input", (e) => {
      experiences[index].role = e.target.value;
    });

    inputs[1].addEventListener("input", (e) => {
      experiences[index].company = e.target.value;
    });

    inputs[2].addEventListener("input", (e) => {
      experiences[index].start = e.target.value;
    });

    inputs[3].addEventListener("input", (e) => {
      experiences[index].end = e.target.value;
    });

    div.querySelector(".deleteExp").addEventListener("click", () => {
      experiences.splice(index, 1);
      renderExperienceList();
    });

    experienceList.appendChild(div);
  });
}
// mat7taj comment 
function saveData() {
  localStorage.setItem("workers", JSON.stringify(workers));
}

//nbyn lworkers li ma3ndhomx room
function renderWorkers() {
  workerSpace.innerHTML = "";

  for (let i = 0; i < workers.length; i++) {
    let worker = workers[i];

    if (worker.room === null) {
      let div = document.createElement("div");
      div.className =
        "flex items-center gap-2 bg-white p-2 rounded cursor-pointer hover:bg-blue-100";

      div.innerHTML =
        '<img src="' +
        worker.photo +
        '" class="w-10 h-10 rounded-full object-cover">' +
        "<span>" +
        worker.name +
        "</span>";

      div.addEventListener("click", function () {
        openProfile(worker.id);
      });

      workerSpace.appendChild(div);
    }
  }
}

// nbyn lanfo dyal worker
function openProfile(id) {
  let worker = null;

  for (let i = 0; i < workers.length; i++) {
    if (workers[i].id === id) {
      worker = workers[i];
      break;
    }
  }

  if (!worker) return;

  profileName.textContent = worker.name;
  profilePhoto.src = worker.photo;
  profileRole.textContent = worker.role;
  profileEmail.textContent = worker.email;
  profilePhone.textContent = worker.phone;

  profileExperiences.innerHTML = "";
  for (let i = 0; i < worker.experiences.length; i++) {
    let e = worker.experiences[i];
    let p = document.createElement("p");
    p.textContent = e.role + " at " + e.company + " (" + e.start + " - " + e.end + ")";
    profileExperiences.appendChild(p);
  }

  profile.classList.remove("hidden");
}

closeProfile.addEventListener("click", function () {
  profile.classList.add("hidden");
});

// 
