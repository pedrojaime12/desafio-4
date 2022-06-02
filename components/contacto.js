function contactComponent(el){
    const componentEl = document.createElement("div")
    componentEl.innerHTML = `
    <section class="contact">
    <div class="contact__container">
        <h2 class="contact__title">
            Contactame 
        </h2>
        <form class="contact-form">
            <div class="contact__form-group">
                <input class="contact__input" type="text" name="name" id="name" placeholder="Tu nombre">
                <input class="contact__input" type="text" name="email" id="email" placeholder="Tu email">
                <textarea class="contact__textarea" name="message" id="message" cols="30" rows="10" placeholder="Tu mensaje"></textarea>
                <button class="contact__button"> Enviar </button>
            </div>
        </form>
    </div>
</section>
    ` 
    el.appendChild(componentEl)
    
    const myFormEl = document.querySelector(".contact-form") 
    myFormEl.addEventListener("submit" , (e) => {
         e.preventDefault();
         const form = e.target;
         const object = {
             name : form.name.value,
             email : form.email.value,
             message : form.message.value,
         };
         
         fetch("https://apx-api.vercel.app/api/utils/dwf" , {
             method: "POST",
             body: JSON.stringify({
                 to: object.email,
                 message: object.message,
             }) ,
             headers: { "content-type": "application/json" } ,
             mode: "cors" ,
             cache : "no-cache" ,
             credentials: "same-origin" , 
             redirect: "follow" ,
             referrerPolicy: "no-referrer"
            });
        });
}

