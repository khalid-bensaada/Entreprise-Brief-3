let btnOne = document.getElementById("btnOne");
let btnTwo = document.getElementById("btnTwo");
let btnTree = document.getElementById("btnTree");
let forma = document.getElementById("forma");
let experiences = document.getElementById("exper");
let image = document.getElementById("image"); 
let roomOne = document.getElementById("roomOne");
let roomTwo = document.getElementById("roomTwo");
let roomTree = document.getElementById("roomTree");
let kolwar = document.getElementById("kolwar");
let roomFor = document.getElementById("roomFor");
let roomFive = document.getElementById("roomFive");
let roomsx = document.getElementById("roomsx");
let fullName = document.getElementById("fullName");
let email = document.getElementById("email");
let Photo = document.getElementById("Photo");
let phone = document.getElementById("phone");
let roles = document.getElementById("roles");
let dateOne = document.getElementById("dateOne");
let dateTwo = document.getElementById("dateTwo");
let company = document.getElementById("company");


let formations = [];

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
        company : company.value

    };

    localStorage.setItem("userData", JSON.stringify(user));
    alert("Data saved successfully!");
    cleareforma();
}

function cleareforma(){

    fullName.value ="";
    email.value ="";
    Photo.value ="";
    phone.value ="";
    roles.value ="";
    dateOne.value ="";
    dateTwo.value ="";
    company.value ="";

}
btnTree.addEventListener("click",() =>{
    saveforamtions();
    cleareforma();
});

