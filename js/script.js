// --- This code finds the value of the .device-view-switch-component::before element, and uses it to set the component viewport size --- //

var breakpoint = {};
breakpoint.refreshValue = function () { 
    this.value = window.getComputedStyle(
        document.querySelector('.device-view-switch-component'), ':before').getPropertyValue('content').replace(/\"/g, '');
};

window.addEventListener('resize', function () {
    breakpoint.refreshValue();
    document.getElementById('breakpoint').innerHTML = breakpoint.value;

    var viewingDesktop = document.getElementsByClassName("switched-to-desktop")[0];
    var viewingTablet = document.getElementsByClassName("switched-to-tablet")[0];
    var viewingMobile = document.getElementsByClassName("switched-to-mobile")[0];

    if (viewingDesktop != null) {
        switchToDesktop();
    }
    if (viewingTablet != null) {
        switchToTablet();
    }
    if (viewingMobile != null) {
        switchToMobile();
    }

}, true).resize();


var frameHeight = "737px";
var screenHeight = "702px";
function setDemoViewport() {
    if (breakpoint.value == 'mobile') {
        frameHeight = "368px";
        screenHeight = "351px";
    } 
}

function switchToDesktop() {
    breakpoint.refreshValue();
    let frameHeight = "737px";
    let screenHeight = "702px"
    if (breakpoint.value == 'mobile') {
        frameHeight = "368px";
        screenHeight = "351px";
        frameWidth = "90%";
        screenWidth = "89%";
    } 
    // if (breakpoint.value == 'tablet') {
    //     frameHeight = "527px";
    //     screenHeight = "490px";
    //     frameWidth = "760px";
    //     screenWidth = "760px";
    // } 
    if (breakpoint.value == 'desktop') {
        frameHeight = "737px";
        screenHeight = "700px";
        frameWidth = "1060ppx";
        screenWidth = "1060ppx";

    } 

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
    document.getElementsByClassName("preview__screen-container")[0].style.height = frameHeight;
    document.getElementsByClassName("preview__content-container")[0].style.height = screenHeight;
    document.getElementsByClassName("preview__screen-container")[0].style.width = frameWidth;
    document.getElementsByClassName("preview__content-container")[0].style.width = screenWidth;
}

function switchToTablet() {

    breakpoint.refreshValue();
    let frameHeight = "991px";
    let screenHeight = "918px"
    if (breakpoint.value == 'mobile') {
        frameHeight = "545px";
        screenHeight = "512px";
    } 
    // if (breakpoint.value == 'tablet') {
    //     frameHeight = "570px";
    //     screenHeight = "508px";
    //     frameWidth = "350px";
    //     screenWidth = "300px";
    // } 

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
    document.getElementsByClassName("preview__screen-container")[0].style.height = frameHeight;
    document.getElementsByClassName("preview__content-container")[0].style.height = screenHeight;
    document.getElementsByClassName("preview__screen-container")[0].style.width = frameWidth;
    document.getElementsByClassName("preview__content-container")[0].style.width = screenWidth;
}

function switchToMobile() {

    breakpoint.refreshValue();
    let frameHeight = "710px";
    let screenHeight = "640px"
    if (breakpoint.value == 'mobile') {
        frameHeight = "355px";
        screenHeight = "320px";
    } 

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
    document.getElementsByClassName("preview__screen-container")[0].style.height = frameHeight;
    document.getElementsByClassName("preview__content-container")[0].style.height = screenHeight;
}