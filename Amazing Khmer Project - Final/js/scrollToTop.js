window.onscroll = function () {
    scrollTopChecking();
}

let _btn = document.getElementById('btn');

function scrollTopChecking() {
    //console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop >= 450 || document.body.scrollTop >= 450) {
        _btn.style.display = 'block';
    } else {
        _btn.style.display = 'none';
    }
}

btn.onclick = goToTop;

function goToTop() {
    // chrome
    document.documentElement.scrollTop = 0;
    // safari
    document.body.scrollTop = 0;
}