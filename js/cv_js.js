document.getElementById('botoncontacto').onclick = function (){
    document.getElementById('botoncontacto').innerHTML="02514-3521452 / karinacolmann1812@gmail.com";
}

const bloque = document.querySelector('.bloque');

bloque.addEventListener('mouseenter',() =>{
bloque.style.backgroundColor = 'whitesmoke';
}
);

bloque.addEventListener('mouseleave', () =>{
    bloque.style.backgroundColor = 'white';
}
);