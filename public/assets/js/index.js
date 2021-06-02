const navList = document.querySelector('#navLists');

const toggleNav = () => {
    navList.classList.toggle('hidden');
    navList.classList.toggle('flex');
}

const navLink = document.querySelectorAll('.nav-link');

const getLastItem = thePath => thePath.substring(thePath.lastIndexOf('/') + 1)
        
for (let i = 0; i < navLink.length; i++ ) {
    navLink[i].getAttribute('href') === `./${getLastItem(window.location.pathname)}` ? navLink[i].classList.add('nav-link-active') : '';
    
}

