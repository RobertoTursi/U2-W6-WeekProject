let spanName = document.getElementById("name")
spanName.innerText = localStorage.getItem('name')
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
        let input = document.querySelector(".searchNone")
        input.style.backgroundColor = "white"
        let icon = document.querySelector(".lettera")
        icon.style.color = "black"
    } else {
        let nav = document.querySelector("nav")
        nav.style.backgroundColor = "transparent"
        nav.style.color = "black"
        nav.style.transition = "0.5s"
        let a = document.querySelectorAll("header a")
        a.forEach(a => {
            a.style.color = "black"
        })
        let input = document.querySelector(".searchNone")
        input.style.backgroundColor = "transparent"
        let icon = document.querySelector(".lettera")
        icon.style.color = "white"
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
let count = 0
const mobileMenu = () =>{
    if(count === 0){
        let menu = document.querySelector(".ulMenuNone")
        menu.classList.add("ulMenu")
        count = 1
    } else {
        let menu = document.querySelector(".ulMenuNone")
        menu.classList.remove("ulMenu")
        count = 0
    }
    
}

/*Film search*/

const arrayOfFilms = [
    {
        name: "Interstellar",
        genere: ["Sci-fi", "Avventura"],
        src: "/img/film1.jpg",
        description: "L'umanità è sull'orlo dell'estinzione e un gruppo di astronauti viaggia attraverso un wormhole alla ricerca di un altro pianeta abitabile.",
        
    },
    {
        name: "No country for old men",
        genere: ["Thriller", "Giallo"],
        src: "/img/film2.jpg",
        description: "Violence and mayhem ensue after a hunter stumbles upon some dead bodies, a stash of heroin and more than $2 million in cash near the Rio Grande.",
        
    },
    {
        name: "Django Unchained",
        genere: ["Western", "Drammatico"],
        src: "/img/film3.jpg",
        description: "2 Oscar e 2 Golden Globe al western di Quentin Tarantino con Christoph Waltz, Jamie Foxx e Leonardo DiCaprio. Uno schiavo nero riacquista la liberta e corre a salvare anche sua moglie."
    },
    {
        name: "Good Will Huntig",
        genere: ["Romantico", "Drammatico"],
        src: "/img/film4.jpg",
        description: "Un professore scopre in un portiere un genio della matematica e l'affida a uno psicologo per affrontare i demoni che ostacolano il suo successo."
    },
    {
        name: "Snatch - Lo strappo",
        genere: ["Giallo", "Commedia"],
        src: "/img/film5.jpg",
        description: "Un trafficante trasporta una gemma rubata e scatena inavvertitamente tutta una serie di eventi che coinvolgono allibratori, boxe a mani nude e maiali."
    },
    {
        name: "Sully",
        genere: ["Drammatico"],
        src: "/img/film6.jpg",
        description: "Poco dopo il decollo, un Airbus 320 tenta un ammaraggio sul fiume Hudson. Sopravvivono tutti, ma il capitano è messo sotto esame e affronta una fama imprevista."
    },
    {
        name: "Batman, il cavaliere oscuro",
        genere: ["Thriller", "Dramma"],
        src: "/img/film7.jpg",
        description: "Batman, il tenente Gordon e il procuratore distrettuale Harvey Dent si scontrano con Joker: un folle genio del crimine dall'aspetto mostruoso che terrorizza Gotham City."
    },
    {
        name: "Joker",
        genere: ["Thriller", "Giallo"],
        src: "/img/film8.jpg",
        description: "Joker centers around the iconic arch-nemesis and is an original, standalone story not seen before on the big screen. The exploration of Arthur Fleck (Joaquin Phoenix), a man disregarded by society, is not only a gritty character study, but also a broader cautionary tale."
    },
    {
        name: "Taxi driver",
        genere: ["Drammatico", "Dramma"],
        src: "/img/film9.jpg",
        description: "Infuriato per la corruzione morale e il decadimento urbano di New York, un tassista squilibrato impazzisce, trama un omicidio e salva una giovane prostituta."
    },
    {
        name: "American beauty",
        genere: ["Romantico", "Drammatico"],
        src: "/img/film10.jpg",
        description: "5 Oscar a un film simbolo degli anni 90, con Kevin Spacey e Annette Bening, diretti da Sam Mendes. Un quarantenne insoddisfatto si invaghisce di una compagna di scuola di sua figlia."
    },
    {
        name: "American Psycho",
        genere: ["Thriller", "Horror"],
        src: "/img/film11.jpg",
        description: "Un broker, dalla bellezza statuaria che maschera la sua follia, sviluppa un orgoglio patologico per lo stile di vita yuppie e si abbandona a improvvisi impulsi omicidi."
    },
    {
        name: "Il grande Lebowski",
        genere: ["Commedia", "Giallo"],
        src: "/img/film12.jpg",
        description: "Commedia cult del Fratelli Coen con Jeff Bridges, John Goodman e Steve Buscemi. Drugo, un ex hippie omonimo di un ricco magnate, deve risolvere il caso di un misterioso rapimento."
    },
    
]

let count2 = 0
const filmSearch = (e) => {
    if(count === 0){
        e.target.style.color = "white"
        e.target.style.transition = "0.5s"

        let input = document.querySelector(".searchNone")
        input.style.display = "inline-block"
        count = 1
    } else {
        e.target.style.color = "black"
        let input = document.querySelector(".searchNone")
        input.style.display = "none"
        count = 0
    }
    
}

const enterFilm = () => {
        let input = document.querySelector(".searchNone")
        let window = document.querySelector(".film")
        let header = document.querySelector("header")
        let h2 = document.querySelector("h2")
        let p = document.querySelector(".description")
        
        for (i=0; i<arrayOfFilms.length; i++){
            // if(arrayOfFilms[i].name.replace(' ', '').includes(input.value.replace(' ', '')) || arrayOfFilms[i].name.replace(' ', '').includes(input.value[0].toUpperCase().replace(' ', ''))){
            //     console.log(arrayOfFilms[i].name.replace(' ', ''))
            //     console.log(input.value.replace(' ', ''))
            //     h2.innerText = arrayOfFilms[i].name
            //     p.innerText = arrayOfFilms[i].description
            //     header.style.backgroundImage = `url(${arrayOfFilms[i].src})`
            //     break
            if(arrayOfFilms[i].name.replace(' ', '') === input.value.replace(' ', '') ) {
                console.log(input.value[0].toUpperCase().replace(' ', ''))
                h2.innerText = arrayOfFilms[i].name
                 p.innerText = arrayOfFilms[i].description
                 header.style.backgroundImage = `url(${arrayOfFilms[i].src})`
            }
            
                
        
    
    }
    
    
}



