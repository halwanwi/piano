mobile = /Mobi|Android/i.test(navigator.userAgent)
var elem = document.documentElement;

function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen().then(() => {
        if (screen.orientation && screen.orientation.lock) {
            screen.orientation.lock('landscape');
        }
    });
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen().then(() => {
        if (screen.orientation && screen.orientation.lock) {
            screen.orientation.lock('landscape');
        }
    });
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen().then(() => {
        if (screen.orientation && screen.orientation.lock) {
            screen.orientation.lock('landscape');
        }
    });
    }
}



$('.full').click(function (e) {
    openFullscreen();
});



document.addEventListener('fullscreenchange', (e) => {
    if (document.fullscreenElement) {
        $('.piano').addClass('fullscreen');
    }
    else {
        $('.piano').removeClass('fullscreen');
    }
});




let stopinter;
if (mobile) { stopinter = 0.07; }
else { stopinter = 0.01; }