const button = document.querySelector("#botao1");
const principal = document.querySelector("#principal");
const secundario = document.querySelector("#secundario");

let count = 0;
let countSecundario = 0;

principal.addEventListener("click", ()=>{
    count++;

    principal.innerHTML = `Mudando ${count}`;
})