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
    let frameWidth = "1060px";
    //let screenWidth = "1058px";
    if (breakpoint.value == 'mobile') {
        frameHeight = "368px";
        screenHeight = "351px";
        //screenWidth = "530px";
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
    document.getElementsByClassName("device-frame-container")[0].style.height = frameHeight;
    document.getElementsByClassName("preview-content-container")[0].style.height = screenHeight;
    document.getElementsByClassName("device-frame-container")[0].style.width = frameWidth;
    //document.getElementsByClassName("preview-content-container")[0].style.width = screenWidth;
}

function switchToTablet() {

    breakpoint.refreshValue();
    let frameHeight = "991px";
    let screenHeight = "918px"
    let frameWidth = "846px";
    // let screenWidth = "784px";
    if (breakpoint.value == 'mobile') {
        frameHeight = "545px";
        screenHeight = "490px";
        // screenWidth = "329px";
    } 


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
    // document.getElementsByClassName("preview-content-container")[0].style.width = screenWidth;
}

function switchToMobile() {

    breakpoint.refreshValue();
    let frameHeight = "710px";
    let screenHeight = "640px"
    let frameWidth = "400px";
    // let screenWidth = "338px";
    if (breakpoint.value == 'mobile') {
        frameHeight = "375px";
        screenHeight = "315px";
        // screenWidth = "180px";
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
    document.getElementsByClassName("device-frame-container")[0].style.height = frameHeight;
    document.getElementsByClassName("preview-content-container")[0].style.height = screenHeight;
    document.getElementsByClassName("device-frame-container")[0].style.width = frameWidth;
    // document.getElementsByClassName("preview-content-container")[0].style.width = screenWidth;
}