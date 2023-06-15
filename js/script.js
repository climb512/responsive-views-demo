function flipToDesktop() {
    document.getElementsByClassName("preview-content-mobile")[0].style.display = "none";
    document.getElementsByClassName("preview-content-tablet")[0].style.display = "none";
    document.getElementsByClassName("preview-content-desktop")[0].style.display = "block";
    
    document.getElementsByClassName("icon-mobile")[0].classList.remove('filter-black');
    document.getElementsByClassName("icon-tablet")[0].classList.remove('filter-black');
    document.getElementsByClassName("icon-desktop")[0].classList.add('filter-black');

    document.getElementsByClassName("main-container")[0].classList.add('switched-to-desktop');
    document.getElementsByClassName("main-container")[0].classList.remove('switched-to-tablet');
    document.getElementsByClassName("main-container")[0].classList.remove('switched-to-mobile');

    document.getElementsByClassName("dots")[0].style.display = "flex";
}

function flipToTablet() {
    document.getElementsByClassName("preview-content-mobile")[0].style.display = "none";
    document.getElementsByClassName("preview-content-tablet")[0].style.display = "block";
    document.getElementsByClassName("preview-content-desktop")[0].style.display = "none";
    
    document.getElementsByClassName("icon-mobile")[0].classList.remove('filter-black');
    document.getElementsByClassName("icon-tablet")[0].classList.add('filter-black');
    document.getElementsByClassName("icon-desktop")[0].classList.remove('filter-black');

    document.getElementsByClassName("main-container")[0].classList.remove('switched-to-desktop');
    document.getElementsByClassName("main-container")[0].classList.add('switched-to-tablet');
    document.getElementsByClassName("main-container")[0].classList.remove('switched-to-mobile');

    document.getElementsByClassName("dots")[0].style.display = "none";
}

function flipToMobile() {
    document.getElementsByClassName("preview-content-mobile")[0].style.display = "block";
    document.getElementsByClassName("preview-content-tablet")[0].style.display = "none";
    document.getElementsByClassName("preview-content-desktop")[0].style.display = "none";
    
    document.getElementsByClassName("icon-mobile")[0].classList.add('filter-black');
    document.getElementsByClassName("icon-tablet")[0].classList.remove('filter-black');
    document.getElementsByClassName("icon-desktop")[0].classList.remove('filter-black');

    document.getElementsByClassName("main-container")[0].classList.remove('switched-to-desktop');
    document.getElementsByClassName("main-container")[0].classList.remove('switched-to-tablet');
    document.getElementsByClassName("main-container")[0].classList.add('switched-to-mobile');

    document.getElementsByClassName("dots")[0].style.display = "none";
}