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


var frameHeight = "46.0625rem";
var screenHeight = "43.875rem";
function setDemoViewport() {
    if (breakpoint.value == 'mobile') {
        frameHeight = "23rem";
        screenHeight = "21.94rem";
    } 
}

function switchToDesktop() {
    breakpoint.refreshValue();
    let frameHeight = "46.0625rem";
    let screenHeight = "43.875rem";
    let frameWidth = "66.25rem";
    //let screenWidth = "66.125rem";
    if (breakpoint.value == 'mobile') {
        frameHeight = "23rem";
        screenHeight = "21.94rem";
        //screenWidth = "33.125rem";
        /* bug -- explicitly setting preview-content-container.width removes the screen resize responsive behavior. */
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
    let frameHeight = "63.975rem";
    let screenHeight = "57.375rem"
    let frameWidth = "52.875rem";
    // let screenWidth = "49rem";
    if (breakpoint.value == 'mobile') {
        frameHeight = "34rem";
        screenHeight = "30.625rem";
        // screenWidth = "20.5rem";
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
    let frameHeight = "44.375rem";
    let screenHeight = "40rem"
    let frameWidth = "25rem";
    // let screenWidth = "21.125rem";
    if (breakpoint.value == 'mobile') {
        frameHeight = "23.4375rem";
        screenHeight = "19.6875rem";
        // screenWidth = "11.25rem";
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