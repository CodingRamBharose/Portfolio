const toggleBtn = document.getElementById('toggle');
const navListUl = document.getElementById('nav-list-ul');
const navLink = document.querySelectorAll('#nav-list-ul li a');
const width = window.innerWidth

const hideNavbar = ()=>{
    navListUl.style.display = 'none'
    toggleBtn.classList.remove('active')
}
navLink.forEach(link =>{
    if(width<768){
        link.addEventListener('click',hideNavbar);
    }
})

toggleBtn.addEventListener('click',()=>{
    toggleBtn.classList.toggle('active')
    if(toggleBtn.classList=='active'){
        navListUl.style.display = 'flex'
    }else{
        navListUl.style.display = 'none'
    }

})