console.log("JavaScript is ready to run");
//declare variables
const navBar = document.getElementById('navigation-links')
const toggle = document.querySelector('.nav-toggle')
const icon = document.querySelector('.fa-bars')
const icon2 = document.querySelector('.fa-x')
const toggleLinks = document.getElementsByClassName('toggle-links')
// const myForm = document.getElementById('contact-form')
// const name = document.getElementById('name')
// const mail = document.getElementById('mail')
// const msg = document.getElementById('msg')
// const btn = document.getElementById('btn')

const toggleLinksArr = Array.from(toggleLinks)

function openMenu() {
    const visible = navBar.getAttribute('data-visible')
    console.log(icon);
   console.log(visible);
   console.log(toggleLinksArr);
     if (visible === 'false') {
         navBar.setAttribute('data-visible',true);
         toggle.setAttribute('aria-expanded', true)
         icon.setAttribute('data-visible', false)
         icon2.setAttribute('data-visible',true)
    }
   
    else if (visible === 'true'){
        navBar.setAttribute('data-visible',false);
        toggle.setAttribute('aria-expanded',false)
        icon.setAttribute('data-visible', true)
         icon2.setAttribute('data-visible',false)
    }
 
}

//add eventlistner
toggle.addEventListener('click', openMenu);

toggleLinksArr.forEach(itm=>
    itm.addEventListener('click', openMenu)
)




