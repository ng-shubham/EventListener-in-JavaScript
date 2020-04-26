let btn = document.getElementById('btn');
let link = document.getElementById('link');
let txt = document.getElementById('txt');

btn.addEventListener('click', clicked);
function clicked(event){
    console.log(event.type, event.target, event.currentTarget);
}

link.addEventListener('click', event => {
    event.preventDefault();
    console.log(event.type, event.target);
});

txt.addEventListener('input', event => {
    console.log(event.type, event.target, event.target.value);
});

txt.addEventListener('change', event =>{
    console.log(event.type, event.target, event.target.value);
});

txt.addEventListener('blur', event => {
    console.log(event.type);
});
