$(function () {
    //回顶
    window.onscroll = function () {
        var t = document.documentElement.scrollTop || document.body.scrollTop;
        if (t >= 800) {
            $(".huidin").css("display","block")
        } else if (t < 800) {
            $(".huidin").css("display", "none")
        }
    }
})



