let hamb=document.querySelector(".hamb");
hamb.addEventListener('click',funcHb);
function funcHb(){
    const menu=document.querySelector(".menuVt");
    menu.classList.toggle("appearance")
    const hb1=document.querySelector("#hb1")
    const hb2=document.querySelector("#hb2")
    const hb3=document.querySelector("#hb3")
    hb1.classList.toggle("hb1rotate")
    hb2.classList.toggle("hb2rotate")
    hb3.classList.toggle("hb3rotate")
}