function footerComp(el){
    const elem = document.createElement("div")
    elem.innerHTML = `
    <footer class="footer">
    <div class="footer__container">
        <h1 class="logo" id="footer-logo"> PEPE </h1>
        <div class="footer__redes-container">
            <div class="redes">
                <a href="https://www.instagram.com/pedrojaime12/" class="red__title">Instagram</a>
                <img class="red__img" src="./images/instagram.png" alt="">
            </div>
            <div class="redes">
                <a href="https://github.com/pedrojaime12" class="red__title">Github</a>
                <img class="red__img" src="./images/github.png" alt="">
            </div>
            <div class="redes">
                <a href="https://www.linkedin.com/in/pedro-jaime-7b98111b3/" class="red__title">Linkedin</a>
                <img class="red__img" src="./images/linkedin.png" alt="">
            </div>
        </div>
    </div>
</footer>`
el.appendChild(elem)
}