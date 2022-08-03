const greetings = ["Bonjour", "Namaste","Hallo","Privet", "Konnichiwa","Hello","Ciao"];
const elem = document.querySelector("#greet")
const bdy = document.querySelector("body")
const nav = document.querySelector("nav")
const head = document.querySelector("#head")
const themefilter = document.querySelectorAll(".themefilter")
const themeswitcher = document.querySelector("#themeswitcher")
const navbutton = document.querySelector("#button")
const navlinks = document.querySelector("#navlinks")
let lang = 0
let i = 0


let a= undefined;

swaplang();
elem.addEventListener("animationend", changelang)

navbutton.addEventListener("click", function(){
    navbutton.classList.toggle("unexpanded-hamburger")
    navbutton.classList.toggle("expanded-hamburger")
    navlinks.classList.toggle("expanded-navlinks")
    navlinks.classList.toggle("unexpanded-navlinks")
    console.log("clicked")
}  )
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
        nav.style.boxShadow = "none"
    }
    if (!entry.isIntersecting){
        nav.style.boxShadow = "0px -5px 20px #ff01aa"
        }
}
changeemoji()
bdy.classList.add("darkbody")
themefilter[0].classList.toggle("themefilteranim")
themefilter[1].classList.toggle("themefilteranim")
themeswitcher.addEventListener("mousedown",hemlo =>{
    bdy.classList.toggle("darkbody")
    bdy.classList.toggle("lightbody")
    themefilter[0].classList.toggle("themefilteranim")
    themefilter[1].classList.toggle("themefilteranim")

    changeemoji()
})
function changeemoji(){
    if(bdy.classList.contains("darkbody")){
        themeswitcher.innerHTML="🌙"
    }
    if(bdy.classList.contains("lightbody")){
        themeswitcher.innerHTML="☀️"
    }
}

