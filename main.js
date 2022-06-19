const greetings = ["Bonjour", "Namaste","Hallo","Privet", "Konnichiwa","Hello","Ciao"];
const elem = document.querySelector("#greet")
const bdy = document.querySelector("body")
let lang = 0
let i = 0


swaplang();
elem.addEventListener("animationend", changelang)



function swaplang(){
    let a = greetings[lang]
    bdy.className="";
    bdy.classList.add("ch"+ a.length)
    elem.innerHTML = a
    lang++;
}


function changelang(){
    if (i == 3) {
        
        i = 0        
        
        swaplang()
        
        
        if (lang==greetings.length){
            lang=0;
        }
        
        elem.style.animation = 'none';
        elem.offsetHeight;
        elem.style.animation = null;
    }
    i++;
}