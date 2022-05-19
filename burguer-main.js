function toggleMenu(e){    
    e.classList.toggle("open")
}
function expandMain(){

    const mainExpand = document.querySelector(".head__expand-main")
    const main = document.querySelector(".head__main")
    
    main.addEventListener("click" , (() => {
        mainExpand.classList.toggle("expand")

    }))
}


function main(){
    expandMain()
    
}
main()
