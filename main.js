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
    
    user={
        fullname : inputName.value ,
        email : inputEmail.value,
        photo : inputPhoto.value,
        phone : inputphone.value,
        roles : choiceRoles.value,
        dateone : inputDateOne.value,
        datetwo : inputdateTwo.value,
        company : inputcompany.value

    };

    localStorage.setItem("userData", JSON.stringify(user));
    alert("Data saved successfully!");
}

