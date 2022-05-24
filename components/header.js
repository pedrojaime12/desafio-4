function headerComponent(el){
    const componentEl = document.createElement("div")
    el.innerHTML = 
    `
<header class="head__content">
            <div class="logo-content">
            <a href="./index.html">

            <h1 class="logo">
                PEPE
            </h1>
             </a>
            </div>
            <div class="head__main" onclick="toggleMenu(this)">
                <span class="head__main-bars"></span>
                <span class="head__main-bars"></span>
                <span class="head__main-bars"></span>
            </div>
            <div class="head__expand-main">
                <div class="head__expand-main-container">
                    <a class="head__expand-main-el" href="portfolio.html"> Portfolio</a>
                    <a class="head__expand-main-el" href="./servicios.html"> Servicios</a>
                    <a class="head__expand-main-el" href="./contacto.html"> Contacto</a>
                </div>
            </div>
        </header>
    `
    el.appendChild(componentEl)
}










