function flipToDesktop() {
    document.getElementsByClassName("preview-content-mobile")[0].style.display = "none";
    document.getElementsByClassName("preview-content-tablet")[0].style.display = "none";
    document.getElementsByClassName("preview-content-desktop")[0].style.display = "block";
    
    document.getElementsByClassName("icon-mobile")[0].classList.remove('filter-black');
    document.getElementsByClassName("icon-tablet")[0].classList.remove('filter-black');
    document.getElementsByClassName("icon-desktop")[0].classList.add('filter-black');

    document.getElementsByClassName("component")[0].classList.add('switched-to-desktop');
    document.getElementsByClassName("component")[0].classList.remove('switched-to-tablet');
    document.getElementsByClassName("component")[0].classList.remove('switched-to-mobile');

    document.getElementsByClassName("dots")[0].style.display = "flex";
    document.getElementsByClassName("mobile-frame")[0].style.display = "none";
    document.getElementsByClassName("preview__screen-container")[0].style.height = "737px";
    document.getElementsByClassName("preview__content-container")[0].style.height = "702px";
}

function flipToTablet() {
    document.getElementsByClassName("preview-content-mobile")[0].style.display = "none";
    document.getElementsByClassName("preview-content-tablet")[0].style.display = "block";
    document.getElementsByClassName("preview-content-desktop")[0].style.display = "none";
    
    document.getElementsByClassName("icon-mobile")[0].classList.remove('filter-black');
    document.getElementsByClassName("icon-tablet")[0].classList.add('filter-black');
    document.getElementsByClassName("icon-desktop")[0].classList.remove('filter-black');

    document.getElementsByClassName("component")[0].classList.remove('switched-to-desktop');
    document.getElementsByClassName("component")[0].classList.add('switched-to-tablet');
    document.getElementsByClassName("component")[0].classList.remove('switched-to-mobile');

    document.getElementsByClassName("dots")[0].style.display = "none";
    document.getElementsByClassName("mobile-frame")[0].style.display = "none";
    document.getElementsByClassName("preview__screen-container")[0].style.height = "1091px";
    document.getElementsByClassName("preview__content-container")[0].style.height = "1024px";
}

function flipToMobile() {
    document.getElementsByClassName("preview-content-mobile")[0].style.display = "block";
    document.getElementsByClassName("preview-content-tablet")[0].style.display = "none";
    document.getElementsByClassName("preview-content-desktop")[0].style.display = "none";
    
    document.getElementsByClassName("icon-mobile")[0].classList.add('filter-black');
    document.getElementsByClassName("icon-tablet")[0].classList.remove('filter-black');
    document.getElementsByClassName("icon-desktop")[0].classList.remove('filter-black');

    document.getElementsByClassName("component")[0].classList.remove('switched-to-desktop');
    document.getElementsByClassName("component")[0].classList.remove('switched-to-tablet');
    document.getElementsByClassName("component")[0].classList.add('switched-to-mobile');

    document.getElementsByClassName("dots")[0].style.display = "none";
    document.getElementsByClassName("mobile-frame")[0].style.display = "flex";
    document.getElementsByClassName("preview__screen-container")[0].style.height = "710px";
    document.getElementsByClassName("preview__content-container")[0].style.height = "640px";
}