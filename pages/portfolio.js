
function addWorks(params = {}){
    

    const template = document.querySelector(".works__card-template")
    const container = document.querySelector(".works__card-container")
  // 
    template.content.querySelector('#card-title').textContent = params.title
    template.content.querySelector('#card-text').textContent = params.text
    template.content.querySelector('.workds__card-url').href = params.url
    template.content.querySelector('#card-img').src = params.img

    
    const clone = document.importNode(template.content , true)
    container.appendChild(clone)
    
    
};

function getWorks (){
    return fetch("https://cdn.contentful.com/spaces/fm0ijh10fg33/environments/master/entries?access_token=lk64VefFQM6JUIP6CzJMYEbbwGWI48hnTkhJcHs7NtA&content_type=work"
    ).then((res) => {
       return res.json()
    }).then((data) => {
        const imgJson = data.includes.Asset[0].fields.file.url
        const portfolioCollec = data.items.map((it) => {

            return {
                title : it.fields.titulo ,
                text : it.fields.descripcion ,
                url : it.fields.url ,
                img : imgJson
            }
        })
        return portfolioCollec   
    })
}


function main(){
    getWorks().then((w) => {
        for (const work of w)
        
        addWorks(work)
    })

    headerComponent(document.querySelector(".headerComponent"))
    expandMain();
    footerComponent(document.querySelector(".footerComp"))
}
main()