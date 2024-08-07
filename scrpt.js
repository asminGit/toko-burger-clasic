// const anim = document.querySelector("a")

// anim.addEventListener('mousemove', function(){
//         anim.style.textDecoration = "underline";
//         anim.style.transition = "0.5s"
// })

// anim.addEventListener('mouseout', function(){
//     if(anim.classList.contains ('slow-transition')){
//         anim.classList.remove('slow-transition');
//         anim.style.textDecoration = 'underline';

//     }else {
//         anim.classList.add('slow-transition');
//         anim.style.textDecoration = 'none';
//     }

// })

const navigasi = document.querySelector("#navbar-list")
const navv = document.querySelector(".list")
navigasi.style.maxHeight = "0px";
navv.addEventListener('click', function(){
    if(navigasi.style.maxHeight == "0px"){
        navigasi.style.maxHeight = "500px";
        navigasi.style.maxWidth = "80px";
    }else{
        navigasi.style.maxHeight = "0px";
    }
})

navigasi.style.transition = "0.5s";


