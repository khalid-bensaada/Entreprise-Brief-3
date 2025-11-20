const btnOne = document.getElementById("btnOne");
const btnTwo = document.getElementById("btnTwo");
const btnTree = document.getElementById("btnTree");
const forma = document.getElementById("forma");
const experiences = document.getElementById("exper");
const image = document.getElementById("image"); 
const roomOne = document.getElementById("roomOne");
const roomTwo = document.getElementById("roomTwo");
const roomTree = document.getElementById("roomTree");
const kolwar = document.getElementById("kolwar");
const roomFor = document.getElementById("roomFor");
const roomFive = document.getElementById("roomFive");
const roomsx = document.getElementById("roomsx");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const Photo = document.getElementById("Photo");
const phone = document.getElementById("phone");
const roles = document.getElementById("roles");
const dateOne = document.getElementById("dateOne");
const dateTwo = document.getElementById("dateTwo");
const oldcompany = document.getElementById("company");


let personnes = [];

btnOne.addEventListener('click' , function(){
    forma.classList.toggle("hidden")
});


function saveforamtions(){
    
    let user={
        fullName : fullName.value ,
        email : email.value,
        photo : Photo.value,
        phone : phone.value,
        roles : roles.value,
        dateOne : dateOne.value,
        dateTwo : dateTwo.value,
        company : oldcompany.value

    };

    localStorage.setItem("userData", JSON.stringify(user));
    alert("Data saved successfully!");
    cleareforma();
}

const formations = { fullName ,email ,Photo ,phone ,roles ,dateOne ,dateTwo ,oldcompany};


function cleareforma(){

    fullName.value ="";
    email.value ="";
    Photo.value ="";
    phone.value ="";
    roles.value ="";
    dateOne.value ="";
    dateTwo.value ="";
    oldcompany.value ="";

}
btnTree.addEventListener("click",() =>{
    const nome = fullName.value.tirm();
    const mail = email.value;
    const picture = Photo.value;
    const number = phone.value;
    
    saveforamtions();
    cleareforma();
});

