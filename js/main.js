const mobileOpen = document.getElementById("navbarNavDropdown");
const closeMenu = document.getElementById("cross");


closeMenu.addEventListener('click', () => 
{
    mobileOpen.classList.toggle('show')
})