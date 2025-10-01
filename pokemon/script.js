
function getPokemon(){
    const infos = JSON.parse(localStorage.getItem("pokemon"))
    console.log(infos, "pokemon")
}
getPokemon()