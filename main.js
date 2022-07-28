const greetings = ["Bonjour", "Namaste","Hallo","Privet", "Konnichiwa","Hello","Ciao"];
const elem = document.querySelector("#greet")
const bdy = document.querySelector("body")
const nav = document.querySelector("nav")
const head = document.querySelector("#head")
const themefilter = document.querySelector("#themefilter")
const themeswitcher = document.querySelector("#themeswitcher")
let lang = 0
let i = 0


let a= undefined;

swaplang();
elem.addEventListener("animationend", changelang)



function swaplang(){
    if (a != undefined){
        bdy.classList.remove("ch"+ a.length)
    }
    a = greetings[lang]
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



// initialise intersection observer
let observer = new IntersectionObserver(function(entries,observer){  
    entries.forEach(entr)
}, {
    root: null,
    rootMargin: '0px',
    threshold: 0
});

// observe the target element
observer.observe(head);

function entr(entry){
    if (entry.isIntersecting){
        //add a box shadow to nav
        nav.style.boxShadow = "none"
        }
    if (!entry.isIntersecting){
        //add a box shadow to nav
        nav.style.boxShadow = "0px -5px 20px #ff01aa"
        }
}

bdy.classList.add("darkbody")
if(bdy.classList.contains("lightbody")){
    themefilter.classList.remove("themefilteranim")
}
if(bdy.classList.contains("darkbody")){
    themefilter.classList.add("themefilteranim")
}

themeswitcher.addEventListener("mousedown",hemlo =>{
    console.log("buahahaha")
       if(bdy.classList.contains("lightbody")){
        bdy.classList.remove("lightbody")
        themefilter.classList.add("themefilteranim")
        bdy.classList.add("darkbody")
        
    }
    else if(bdy.classList.contains("darkbody")){
        console.log("buahahaha")
        bdy.classList.remove("darkbody")
        themefilter.classList.remove("themefilteranim")
        bdy.classList.add("lightbody")
    }
})
