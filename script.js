const benefits = document.querySelector("#benefits");
const benefitsSection = document.querySelector(".benefits-section");

const about = document.querySelector("#about");
const aboutSection = document.querySelector(".about-title");

const apartments = document.querySelector("#apartments");
const apartmentSection = document.querySelector(".apartment-section")


function navigation(button, section) {
    button.addEventListener("click", function(e) {
        section.scrollIntoView()
    })
}

const mainSection = document.querySelector(".main-section");


const time = setInterval(function() {
    if (mainSection.classList.contains("bg1")) {
        mainSection.classList.remove("bg1")
        mainSection.classList.add("bg2")
    }
    else 
    {
        mainSection.classList.remove("bg2")
        mainSection.classList.add("bg1")
    }
   
}, 9000)


navigation(benefits, benefitsSection);
navigation(about, aboutSection);
navigation(apartments, apartmentSection);


//////// Choose apartment\\\\\\\\\

const smallBtn = document.querySelector(".btn-small");
const largeBtn = document.querySelector(".btn-large");
const btn = document.querySelectorAll(".btn");
let clicked = false;
const firstTop = document.querySelector(".first-top")
const secondTop = document.querySelector(".second-top")
const firstPhoto = document.querySelector(".apart1")
const secondPhoto = document.querySelector(".apart2")

btn.forEach(element => {
    element.addEventListener("click", function() {
        if (element.classList.contains("btn-small")) {
            console.log("small apartments")
            firstTop.innerHTML = "Sunny apartment #2";
            firstPhoto.src = "images/sunny.jpg"
            secondTop.innerHTML = "Sea apartment #2";
            secondPhoto.src = "images/sunny2.jpg";
            

        }
        else 
        {
            firstTop.innerHTML = "Family apartment #1";
            firstPhoto.src = "images/family.jpg"
            secondTop.innerHTML = "Big house #1";
            secondPhoto.src = "images/family2.jpg"
            console.log("big apartments")
        };
        
        if (element.classList.contains("btn-checked")) {
            return false
        }
        else {
            document.querySelector(".btn-checked").classList.remove("btn-checked")
            element.classList.add("btn-checked")
        }
    })
 
});






///////// Slider \\\\\\\

const leftPhoto = document.querySelector(".left-photo");
const rightPhoto = document.querySelector(".right-photo");
const mainPhoto = document.querySelector(".main-photo");

const time2 = setInterval(function() {
    if (mainPhoto.querySelector("img").getAttribute("src") == "./images/modern.jpg") {
        mainPhoto.querySelector("img").src = "./images/modern1.jpg"
        rightPhoto.querySelector("img").src = "./images/modern.jpg"
        leftPhoto.querySelector("img").src = "./images/modern2.jpg"
    }

    else if (mainPhoto.querySelector("img").getAttribute("src") == "./images/modern1.jpg") {
        mainPhoto.querySelector("img").src = "./images/modern2.jpg"
        rightPhoto.querySelector("img").src = "./images/modern1.jpg"
        leftPhoto.querySelector("img").src = "./images/modern.jpg"
    }
    
    else {
        mainPhoto.querySelector("img").src = "./images/modern.jpg"
        rightPhoto.querySelector("img").src = "./images/modern2.jpg"
        leftPhoto.querySelector("img").src = "./images/modern1.jpg"
    }
}, 6000)

////// form validation \\\\\\


let flag;
const email = document.querySelector("#email");
const name = document.querySelector("#name");
const apartment = document.querySelector("#apartment");
const dateStart = document.querySelector("#date-start");
const dateEnd = document.querySelector("#date-end");
const submit = document.querySelector("#submit");
const error = document.querySelector(".error");

function formValidation() {

    var errorText = ""

   if (!email.value.includes("@")) {
       errorText = "Incorrect email adress"
       error.innerHTML = errorText
        return false
   };

   if (name.value == "") {
       error.innerHTML = "Incorrect name"
       return false
   };



  
    
}

