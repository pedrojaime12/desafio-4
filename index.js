function addServices(params){

    const template = document.querySelector("#services__card-template")
    const container = document.querySelector(".services__card-container")
    console.log(params.img)

    /* 
    template.document.querySelector(".services__card-title").textContent = params.title
    template.document.querySelector(".services__card-text").textContent = params.text
const clone = document.importNode(template.content , true)
container.appendChild(clone)
*/
    
};

function getServices (){
    return fetch("https://cdn.contentful.com/spaces/fm0ijh10fg33/environments/master/entries?access_token=lk64VefFQM6JUIP6CzJMYEbbwGWI48hnTkhJcHs7NtA"
    ).then((res) => {
       return res.json()
    }).then((data) => {
        console.log(data)
        const serviceCollec = data.items.map((it) => {
            return {
                title : it.fields.title ,
                text : it.fields.description ,
                img : it.fields.imagen.sys
            }
        })
        return serviceCollec    
    })
    
}




function main(){
    getServices().then((services) => {
        for (const serv of services){
            addServices(serv)
        }
    })
}
main();