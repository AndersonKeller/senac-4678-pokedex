
function getPokemon(){
    const infos = JSON.parse(localStorage.getItem("pokemon"))
    console.log(infos, "pokemon")
    const div = document.querySelector("div")
    const p = document.createElement("p")
    p.innerText = infos.name
    div.append(p)
}
getPokemon()