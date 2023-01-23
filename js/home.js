/* Nav change color*/
window.onscroll = () =>{
    if(window.scrollY > 0){
        let nav = document.querySelector("nav")
        nav.style.backgroundColor = "black"
        nav.style.color = "white"
        nav.style.transition = "0.5s"
        let a = document.querySelectorAll("header a")
        a.forEach(a => {
            a.style.color = "white"
        })
    } else {
        let nav = document.querySelector("nav")
        nav.style.backgroundColor = "transparent"
        nav.style.color = "black"
        nav.style.transition = "0.5s"
        let a = document.querySelectorAll("header a")
        a.forEach(a => {
            a.style.color = "black"
        })
    }
} 



/* Carousel film main*/ 
const films = [
    "./img/film1.jpg",
    "./img/film2.jpg",
    "./img/film3.jpg",
    "./img/film4.jpg",
    "./img/film5.jpg",
    "./img/film6.jpg",
    "./img/film7.jpg",
    "./img/film8.jpg",
    "./img/film9.jpg",
    "./img/film10.jpg",
    "./img/film11.jpg",
    "./img/film12.jpg",
]
let container = document.querySelector(".box")

for(let i=0; i<3; i++){
    
    container.innerHTML += ` 
    <div class="col ">
        <img class= "filmImage${i+1}" src="./img/film${i+1}.jpg" alt="foto film">
        </div>
    </div>` 
    if(i === 2){
        container.innerHTML += `
        <div class="col-2 rightArrow">
        <i onclick="startCarousel(event)" class="bi bi-arrow-right-square first-arrow"></i>
        </div>
    </div>`
    }
}



let container2 = document.querySelector(".box2")

for(let i=0; i<3; i++){
    container2.innerHTML += ` 
    <div class="col ">
        
        <img class="filmImage${i+4}" src="./img/film${i+7}.jpg" alt="foto film">
        </div>
    </div>` 
    if(i === 2){
        container2.innerHTML += `
        <div class="col-2 rightArrow">
        <i onclick="startCarousel(event)" class="bi bi-arrow-right-square second-arrow"></i>
        </div>
    </div>`
}
}


let counter = 0
let counter1 = 6
const startCarousel = (elem) => {
    if(elem.target.className === "bi bi-arrow-right-square first-arrow"){
        let foto1 = document.querySelector(".filmImage1")
        foto1.src = films[counter + 1]
        let foto2 = document.querySelector(".filmImage2")
        foto2.src = films[counter + 2]
        let foto3 = document.querySelector(".filmImage3")
        foto3.src = films[counter + 3]
        counter+=1
        if(counter === 4){
            foto3.src = films[0]
        } else if(counter === 5) {
            foto2.src = films[0]
            foto3.src = films[1]
        } else if(counter === 6){
            foto1.src = films[0]
            foto2.src = films[1]
            foto3.src = films[2]
            counter = 0
    }
    } else {
        let foto1 = document.querySelector(".filmImage4")
        foto1.src = films[counter1 + 1]
        let foto2 = document.querySelector(".filmImage5")
        foto2.src = films[counter1 + 2]
        let foto3 = document.querySelector(".filmImage6")
        foto3.src = films[counter1 + 3]
        counter1+=1
        if(counter1 === 10){
            foto3.src = films[6]
        } else if(counter1 === 11) {
            foto2.src = films[6]
            foto3.src = films[7]
        } else if(counter1 === 12){
            foto1.src = films[6]
            foto2.src = films[7]
            foto3.src = films[8]
            counter1 = 6
    }
}
}


/*Menu a tendina*/

const mobileMenu = () =>{
    let menu = document.querySelector(".ulMenuNone")
    menu.classList.add("ulMenu")
    
}