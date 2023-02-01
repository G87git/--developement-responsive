var loader = document.getElementById('preloader')
// console.log(loader)
window.addEventListener("load", wave);

function wave(){
    loader.classList.add('vanish');
    loader.style.display='none';
}