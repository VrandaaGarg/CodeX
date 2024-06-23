let openBtn=document.querySelector(".open");
let closeBtn=document.querySelector(".close");
let navlist=document.querySelector(".navlist");

openBtn.addEventListener("click",()=>{
    navlist.style.display="flex"
});

closeBtn.addEventListener("click",()=>{
    navlist.style.display="none";
})