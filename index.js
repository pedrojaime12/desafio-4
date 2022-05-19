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
        const img = data.includes.Asset[0].fields.file.url
        const serviceCollec = data.items.map((it) => {

            return {
                title : it.fields.title ,
                text : it.fields.description ,
                img : img
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
}
main();