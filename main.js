const greetings = ["Bonjour", "Namaste","Hallo","Privet", "Konnichiwa","Hello","Ciao"];
const elem = document.querySelector("#ijji")
const bdy = document.querySelector("body")
let lang = 0
let i = 0
// let a;

// changelang();
let a = greetings[lang]
lang++;
bdy.className="";
bdy.classList.add("ch"+ a.length)
elem.innerHTML = a


elem.addEventListener("animationend", changelang)
function changelang(){
    if (i == 3) {
        
        i = 0        
        
        
        a =greetings[lang];
        bdy.className="";
        bdy.classList.add("ch"+ a.length)
        elem.innerHTML = a
        lang++;
        
        
        if (lang==greetings.length){
            lang=0;
        }
        
        elem.style.animation = 'none';
        elem.offsetHeight;
        elem.style.animation = null;
    }
    i++;
}