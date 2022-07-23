const greetings = ["Bonjour", "Namaste","Hallo","Privet", "Konnichiwa","Hello","Ciao"];
const elem = document.querySelector("#greet")
const bdy = document.querySelector("body")
const nav = document.querySelector("nav")
const head = document.querySelector("#head")
let lang = 0
let i = 0


swaplang();
elem.addEventListener("animationend", changelang)


if(bdy.classList.contains("lightbody")){
    themefilter.classList.remove("themefilteranim")
    sun.style.display="inline-block"
    moon.style.display="none"
}
if(bdy.classList.contains("darkbody")){
    themefilter.classList.add("themefilteranim")
    moon.style.display="inline-block"
    sun.style.display="none"
}
themeswitcher.addEventListener("mousedown",riseupdown =>{
    // console.log("buahahaha")
    if(bdy.classList.contains("lightbody")){
        bdy.classList.remove("lightbody")
        themefilter.classList.add("themefilteranim")
        bdy.classList.add("darkbody")
        moon.style.display="inline-block"
        sun.style.display="none"


    }
    else if(bdy.classList.contains("darkbody")){
        bdy.classList.remove("darkbody")
        themefilter.classList.remove("themefilteranim")
        bdy.classList.add("lightbody")
        sun.style.display="inline-block"
        console.log("buahahaha")

        moon.style.display="none"
    }
})



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
    // grab an element from dom
    
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