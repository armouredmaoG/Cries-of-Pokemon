var btn = document.querySelectorAll(".btn");
let currPokemon;



for(let i=0;i<btn.length;i++){
    btn[i].addEventListener("click", function (){
        currPokemon = this.getAttribute("id");
        var sound = "./sounds/" + currPokemon + ".mp3";
        var pokemonSound = new Audio(sound);
        pokemonSound.play();
    });
}
