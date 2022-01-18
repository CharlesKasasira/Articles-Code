const menu = document.getElementById("menu");

const toggleMenu = () => menu.classList.toggle("show");

window.onclick = (event) => {
    if (!event.target.matches('.btn')) {
        if(menu.classList.contains('show')){
            menu.classList.remove('show')
        }
    }
}

menu.addEventListener('click', (event) => event.stopPropagation());