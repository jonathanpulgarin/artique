function menutoggle() {
    $("#hamburger").toggleClass("is-active");
    $("body").toggleClass("page-scroll-deactivate");
    $(".mobile-menu").toggleClass("active-menu");
}

/*
window.onscroll = function() {
    if (window.scrollY > 100) {
        $("#hamburger").css("background-color" , "white");
        $("#hamburger").css("border" , "1px rgba(0, 0, 0, 0.1) solid");
    }
    else {
        $("#hamburger").css("background-color" , "rgba(255, 255, 255, 0)");
        $("#hamburger").css("border" , "1px rgba(0, 0, 0, 0.0) solid");
    }
}
*/