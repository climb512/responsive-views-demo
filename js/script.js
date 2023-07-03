var dfc;
var dfwc;
var newHeight;

window.addEventListener('resize', function () {

    var viewingDesktop = document.getElementsByClassName("switched-to-desktop")[0];
    var viewingTablet = document.getElementsByClassName("switched-to-tablet")[0];
    var viewingMobile = document.getElementsByClassName("switched-to-mobile")[0];
    
    if (viewingDesktop != null) {
        switchToDesktop();
        console.log("desktop");
    }
    if (viewingTablet != null) {
        switchToTablet();
        console.log("tablet");
    }
    if (viewingMobile != null) {
        switchToMobile();
        console.log("mobile");
    }

}, true);

var deskToggle = 0;
function switchToDesktop() {
    deskToggle += 1;
    console.log("first:"+deskToggle);
    dfc = document.getElementsByClassName("device-frame-container")[0];
    dfcw = Math.min(document.querySelector(".device-frame-container").clientWidth, 1060);
    newHeight = parseInt(dfcw * 0.7) + "px";
    var newScreenHeight = parseInt(dfcw * 0.7) + "px";
    
    let frameHeight = newHeight;
    let screenHeight = newScreenHeight;
    let frameWidth = "1060px";
    let screenWidth = "auto";

    document.getElementsByClassName("preview-content-mobile")[0].style.display = "none";
    document.getElementsByClassName("preview-content-tablet")[0].style.display = "none";
    document.getElementsByClassName("preview-content-desktop")[0].style.display = "block";

    document.getElementsByClassName("icon-mobile")[0].classList.remove('filter-black');
    document.getElementsByClassName("icon-tablet")[0].classList.remove('filter-black');
    document.getElementsByClassName("icon-desktop")[0].classList.add('filter-black');

    document.getElementsByClassName("device-view-switch-component")[0].classList.add('switched-to-desktop');
    document.getElementsByClassName("device-view-switch-component")[0].classList.remove('switched-to-tablet');
    document.getElementsByClassName("device-view-switch-component")[0].classList.remove('switched-to-mobile');

    document.getElementsByClassName("dots")[0].style.display = "flex";
    document.getElementsByClassName("mobile-frame")[0].style.display = "none";
    document.getElementsByClassName("device-frame-container")[0].style.height = frameHeight;
    document.getElementsByClassName("preview-content-container")[0].style.height = screenHeight;
    document.getElementsByClassName("device-frame-container")[0].style.width = frameWidth;
    document.getElementsByClassName("preview-content-container")[0].style.width = screenWidth;

    // force redraw -- find a better way!
    if (deskToggle % 2 == 1) {
        console.log(" / in if:"+deskToggle);
        switchToDesktop();
    }
}

var tabletToggle = 0;
function switchToTablet() {
    tabletToggle += 1;

    dfc = document.getElementsByClassName("device-frame-container")[0];
    dfcw = Math.min(document.querySelector(".device-frame-container").clientWidth, 560);
    newHeight = parseInt(dfcw * 1.7) + "px";
    var newScreenHeight = parseInt((dfcw * 1.7) * .90) + "px";
    
    let frameHeight = newHeight;
    let screenHeight = newScreenHeight;
    let frameWidth = "560px";
    let screenWidth = (dfcw * 0.9) + "px";

    document.getElementsByClassName("preview-content-mobile")[0].style.display = "none";
    document.getElementsByClassName("preview-content-tablet")[0].style.display = "block";
    document.getElementsByClassName("preview-content-desktop")[0].style.display = "none";

    document.getElementsByClassName("icon-mobile")[0].classList.remove('filter-black');
    document.getElementsByClassName("icon-tablet")[0].classList.add('filter-black');
    document.getElementsByClassName("icon-desktop")[0].classList.remove('filter-black');

    document.getElementsByClassName("device-view-switch-component")[0].classList.remove('switched-to-desktop');
    document.getElementsByClassName("device-view-switch-component")[0].classList.add('switched-to-tablet');
    document.getElementsByClassName("device-view-switch-component")[0].classList.remove('switched-to-mobile');

    document.getElementsByClassName("dots")[0].style.display = "none";
    document.getElementsByClassName("mobile-frame")[0].style.display = "none";
    document.getElementsByClassName("device-frame-container")[0].style.height = frameHeight;
    document.getElementsByClassName("preview-content-container")[0].style.height = screenHeight;
    document.getElementsByClassName("device-frame-container")[0].style.width = frameWidth;
    document.getElementsByClassName("preview-content-container")[0].style.width = screenWidth;

    // force redraw -- find a better way!
    if (tabletToggle % 2 == 1) {
        console.log(" / in if:"+tabletToggle);
        switchToTablet();
    }
}

var mobileToggle = 0;
function switchToMobile() {

    mobileToggle += 1;
    console.log("first:"+mobileToggle);

    dfc = document.getElementsByClassName("device-frame-container")[0];
    dfcw = Math.min(document.querySelector(".device-frame-container").clientWidth, 220);
    newHeight = parseInt(dfcw * 2.2) + "px";
    var newScreenHeight = parseInt((dfcw * 2.2) * .905) + "px";
    
    let frameHeight = newHeight;
    let screenHeight = newScreenHeight;
    let frameWidth = "220px";
    let screenWidth = (dfcw * 0.94) + "px";

    document.getElementsByClassName("preview-content-mobile")[0].style.display = "block";
    document.getElementsByClassName("preview-content-tablet")[0].style.display = "none";
    document.getElementsByClassName("preview-content-desktop")[0].style.display = "none";

    document.getElementsByClassName("icon-mobile")[0].classList.add('filter-black');
    document.getElementsByClassName("icon-tablet")[0].classList.remove('filter-black');
    document.getElementsByClassName("icon-desktop")[0].classList.remove('filter-black');

    document.getElementsByClassName("device-view-switch-component")[0].classList.remove('switched-to-desktop');
    document.getElementsByClassName("device-view-switch-component")[0].classList.remove('switched-to-tablet');
    document.getElementsByClassName("device-view-switch-component")[0].classList.add('switched-to-mobile');

    document.getElementsByClassName("dots")[0].style.display = "none";
    document.getElementsByClassName("mobile-frame")[0].style.display = "flex";
    document.getElementsByClassName("device-frame-container")[0].style.height = frameHeight;
    document.getElementsByClassName("preview-content-container")[0].style.height = screenHeight;
    document.getElementsByClassName("device-frame-container")[0].style.width = frameWidth;
    document.getElementsByClassName("preview-content-container")[0].style.width = screenWidth;

    // force redraw -- find a better way!
    if (mobileToggle % 2 == 1) {
        console.log(" / in if:"+mobileToggle);
        switchToMobile();
    }

}