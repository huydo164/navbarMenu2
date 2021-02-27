$(document).ready(function () {
    SITE.nav();
})

SITE = {

    nav:function () {
        $('.menu-icons').click(function () {
            $('nav').toggleClass('active');
            $('.nav-list li').fadeIn('250');

        })
    }
}