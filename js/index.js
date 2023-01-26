
const changeWindow = () => {
    
    let input = document.querySelector("input")
    sessionStorage.setItem("name", input.value)
    if(input.value !== "") {
        window.location = "/home.html"
    } else {
        window.alert("Inserisci prima un nome valido")
    }
    
}