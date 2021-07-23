const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu-navegacion');

// console.log(menu)
// console.log(hamburguer)

hamburguer.addEventListener('click', () =>{
    menu.classList.toggle("spread")
    // cada vez que toques el menu le vas a poner la clase depende si la tiene o no
})

window.addEventListener('click', e => {
    if(menu.classList.contains('spread') && e.target != menu && e.target != hamburguer){
        menu.classList.toggle("spread")
    }
});