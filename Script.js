//Solutions of the All DOM Assignments\

// 1. Dev Community

document.querySelector(".side-bar .crayons-card  .crayons-subtitle-2").innerHTML = "Welcome to Parag's Community"
"Welcome to Parag's Community"
document.querySelector(".side-bar .crayons-card  .color-base-70").innerHTML = "Becoming a Full Stack JavaScript Web Developer"

// 2. Apple Array

const arr = []
document.querySelectorAll(".as-imagegrid-item").forEach((element) => {
    arr.push(element.innerText.replace("\nSupport", ""))
})
console.log(arr)
 
Answer: (7)['iPhone', 'Mac', 'iPad', 'Watch', 'AirPods', 'Music', 'TV']


// 3. Youtube Adding Block

let h3 = document.createElement("h3")
h3.innerText = "THIS IS NEW FAQ !!"

let section = document.createElement("section")
section.classList.add("parent")
section.appendChild(h3)

document.querySelector(".accordion-homepage").appendChild(section)


//4. OnePlus Contact Number

document.querySelector(".one-tel-number").innerText="+91 997564492";

//5. Samsung But Now




//6. Adidas Search Bar




//7. Searching in mdn docs

document.getElementById("hp-search-input").value = "Basic Javascript"
document.getElementById("hp-search-form").submit()


//8. Removing Languages in Google

const del = document.querySelector("#SIvCob");
del.remove();


//9. Changing Font Family, Color

   document.querySelector(
    ".content-width-extra-large .display-heading-1"
  ).style.fontFamily = "monospace";

   document.querySelector(
    ".content-width-extra-large .display-heading-1"
  ).style.color = "#A7331C";
 
 
//10. Changing Backgroud color of Button
 
 let btn = document.querySelector(".btn-cta-big .login-btn-text")
 btn.addEventListener("mouseover", () => {
  btn.style.backgroundColor = "red"
 });


//11. Adding Ineuron Logo in Realme

 document.querySelector(".icon-logo").style.backgroundImage = "url('https://ineuron.ai/images/ineuron-logo.png')";


//12. Changing Background Color of Button in Git

 document.querySelector(".btn-primary").style.background = "black"; 


 //13. Changing Heading

 document.querySelector(".fl-heading .fl-heading-text").innerText = "JavaScript BootCamp --";


 //14. Changing Font Size, Color

 document.querySelector(".HotDealsAll__Heading__2fIbe").style.fontSize = "100px";                                  
 document.querySelector(".HotDealsAll__Heading__2fIbe").style.color = "red";


 //15. Alignment of Heading

 document.querySelectorAll(".ps-title")[4].style.textAlign = "right";

 
 //16. Changing the Text of Heading

 document.querySelector(".section-title_title__VEDfK").innerHTML = "STARTS FROM SCRATCH THAT'S WHY TAKES TIME";


 //17. Adding Date in place of text

 document.querySelector(".button-and-link-wrapper .btn-large").innerText = new Date();


 //18. Changing Background Color

 document.querySelector(".p-f03-footer-container").style.background = "red";


 //19. Generating source code for Logo

 document.querySelector(".logo").src


//20. Changing Color

document.querySelector(".section-box .desc").style.color = "red";