let openBtn=document.querySelector(".open");
let closeBtn=document.querySelector(".close");
let navlist=document.querySelector(".navlist");
let hide=document.querySelector(".hide")
let html=document.querySelector(".html")
let css=document.querySelector(".css");
let js=document.querySelector(".js")
let htmlBtn=document.querySelector(".htmlBtn");
let jsBtn=document.querySelector(".jsBtn");
let cssBtn=document.querySelector(".cssBtn");

openBtn.addEventListener("click",()=>{
    navlist.style.display="flex"
});

closeBtn.addEventListener("click",()=>{
    navlist.style.display="none";
})


htmlBtn.addEventListener("click",()=>{
    if(html.classList.contains("hide")){
        html.classList.remove("hide");
    }else{
        html.classList.add("hide")
    }
})

jsBtn.addEventListener("click",()=>{
    if(js.classList.contains("hide")){
        js.classList.remove("hide");
    }else{
        js.classList.add("hide")
    }
})

cssBtn.addEventListener("click",()=>{
    if(css.classList.contains("hide")){
        css.classList.remove("hide");
    }else{
        css.classList.add("hide")
    }
})