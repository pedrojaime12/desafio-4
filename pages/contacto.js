function contactComponent(el){
    const componentEl = document.createElement("div")
    componentEl.innerHTML = `
    <section class="contact">
    <div class="contact__container">
        <h2 class="contact__title">
            Contactame 
        </h2>
        <form action="submit">
            <div class="contact__form-group">
                <input class="contact__input" type="text" name="nombre" id="name" placeholder="Tu nombre">
                <input class="contact__input" type="text" name="email" id="email" placeholder="Tu email">
                <textarea class="contact__textarea" name="message" id="message" cols="30" rows="10" placeholder="Tu mensaje"></textarea>
                <button class="contact__button" type="reset"> Enviar </button>
            </div>
        </form>
    </div>
</section>
    `
    
  el.appendChild(componentEl)

}