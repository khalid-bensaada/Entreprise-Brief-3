// variables ta3 les button li 3ndi
const btnAdd = document.getElementById("btnAdd");
const Form = document.getElementById("Form");
const saveWorker = document.getElementById("saveWorker");
const closeForm = document.getElementById("closeForm");

// variables ta3 les inputes li yda5l worker 
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const photo = document.getElementById("photo");
const role = document.getElementById("role");

// variables les exeperience li 3nd worker
const expCompany = document.getElementById("expCompany");
const expRole = document.getElementById("expRole");
const expStart = document.getElementById("expStart");
const expEnd = document.getElementById("expEnd");
const addExp = document.getElementById("addExp");
const experienceList = document.getElementById("experienceList");

// variables bax n5tar worker
const popupSelect = document.getElementById("popupSelect");
const popupList = document.getElementById("popupList");
const closePopup = document.getElementById("closePopup");

// variables les donnees ta3 worker
const profile = document.getElementById("profile");
const profileName = document.getElementById("profileName");
const profilePhoto = document.getElementById("profilePhoto");
const profileRole = document.getElementById("profileRole");
const profileEmail = document.getElementById("profileEmail");
const profilePhone = document.getElementById("profilePhone");
const profileExperiences = document.getElementById("profileExperiences");
const closeProfile = document.getElementById("closeProfile");

//variable ta3 list dyal worker fi set 
const workerSpace = document.getElementById("workerSpace");

// object for the rooms i have 
const rooms = {
  roomOne: document.getElementById("roomOne"),
  roomTwo: document.getElementById("roomTwo"),
  roomTree: document.getElementById("roomTree"),
  roomFor: document.getElementById("roomFor"),
  roomFive: document.getElementById("roomFive"),
  roomsx: document.getElementById("roomsx")
};

// localStorage ta3 worker
let workers = JSON.parse(localStorage.getItem("workers")) || [];

//array ta3 exeperiences
let experiences = [];

// ila clicka 3la add worker tla3 lih formula
btnAdd.addEventListener("click", function () {
  Form.classList.remove("hidden");
});

//
closeForm.addEventListener('click', function(){
  Form.classList.add("hidden");
})

// ila clicka 3la save worker ytseva lworker walakin bichorot
saveWorker.addEventListener('click',function(){

  //chorot
  if (fullName.value === "" || email.value === "" || photo.value=== "" ){
    alert("Enter all formations");
    return;

  }

  // na5d experiences wnkopihom hna
  let copiedExperiences = [];
  for (let i = 0; i < experiences.length; i++) {
    copiedExperiences.push(experiences[i]);
  }

  // object n5asn fih values
  let worker = {
    id: Date.now(),
    name: fullName.value,
    email: email.value,
    phone: phone.value,
    photo: photo.value,
    role: role.value,
    experiences: copiedExp,
    room: null
  };

  workers.push(worker);

  experiences = [];
  
})
