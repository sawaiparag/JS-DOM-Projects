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


// 3. 