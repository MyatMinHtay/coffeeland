const menus = document.querySelectorAll('.menuItem');

menus.forEach((menu)=>{
    menu.addEventListener('click',(e)=>{
        menus.forEach((menu)=>{
            menu.classList.remove('active');
        });

        e.target.classList.add('active');
    });
});