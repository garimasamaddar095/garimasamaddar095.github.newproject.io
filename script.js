const header = document.querySelector('.header');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
    
    const menuBtn=document.querySelector('.menu-btn');
    const hamburger=document.querySelector('.menu-btn__burger');
    const nav=document.querySelector('.menu-nav');
    const menuNav=document.querySelector('.menu-nav-ul');
    const navItems=document.querySelectorAll('.menu-nav-ul-li');
    let showMenu=false;

    menuBtn.addEventListener('click',toggleMenu);

    function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('active');
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));
        showMenu=true;
    }
    else{
        menuBtn.classList.remove('active');
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));
        showMenu=false;
    }
}