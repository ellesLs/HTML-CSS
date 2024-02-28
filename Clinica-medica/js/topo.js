const body = document.querySelector('body');
const topo = document.createElement('header');
topo.classList.add('top')

topo.innerHTML = 
    `<div class="size-limit">
        <a href="index.html"><img class="logo-img" src="./img/logo.png" alt="logo"></a>
        <nav class="links-top">
            <a href="#sobre">Sobre</a>
            <a href="especialidades.html">Especialidades</a>
            <a href="#contato">Contatos
            </a>
        </nav>
    </div>
    `;
body.prepend(topo)

