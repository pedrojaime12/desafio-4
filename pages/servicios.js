function serviceComponent (el) {
    const componentEl = document.createElement("div")
    componentEl.innerHTML = `
    <section class="services">
        
        <div class="services__card-container">
        <template class="service__card-template" id="services__card-template">
        <div class="services__cards">

        <img id="card-img" class="services__card-img" src="" alt="">
        <h4 id="card-title" class="services__card-title"> </h4>
        <p id="card-text" class="services__card-text"> </p>

        </div>
        </template>
       
        </div>
    </section>`

    el.appendChild(componentEl)
}
function addServices(params = {}){
    

    const template = document.querySelector("#services__card-template")
    const container = document.querySelector(".services__card-container")
  // 
    template.content.querySelector('#card-title').textContent = params.title
    template.content.querySelector('#card-text').textContent = params.text
    template.content.querySelector('#card-img').src = params.img
    
    const clone = document.importNode(template.content , true)
    container.appendChild(clone)
    
    
};
function getServices (){
    return fetch("https://cdn.contentful.com/spaces/fm0ijh10fg33/environments/master/entries?access_token=lk64VefFQM6JUIP6CzJMYEbbwGWI48hnTkhJcHs7NtA"
    ).then((res) => {
       return res.json()
    }).then((data) => {
        const imgJson = data.includes.Asset[0].fields.file.url
        const serviceCollec = data.items.map((it) => {

            return {
                title : it.fields.title ,
                text : it.fields.description ,
                img : imgJson
            }
        })
        return serviceCollec   
    })
}


function main(){
    getServices().then((s) => {
        for (const serv of s)
        addServices(serv)
    })
    headerComponent(document.querySelector(".headerComp"))
    expandMain()
    serviceComponent(document.querySelector(".service"))
    footerComponent(document.querySelector(".footerComp"))
}
main()