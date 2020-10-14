$(document).ready(function () {

    $('.pinfo').hide("fast");

    $('.services').click(function () {

        if ($(this).css("background-color") == "#f44336") {
            hideInfo();
        } else {
            hideInfo();
            changeColor(this);
            showInfo(this);
        }

    });

    $('a').click(function () {
        $('html, body').animate({
            scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top()
        }, 500);
        return false;
    });

   




});

//hides information
function hideInfo() {
    $('.pinfo').hide("fast");
    $('.services').css("background-color", "white");
    $('.services').css("color", "#333");
}

//shows information
function showInfo(block) {
    $(block).find('.pinfo').show("fast");
    $(block).css("opacity", "1");
}

function changeColor(block) {
    $(block).css("background-color", "#f44336");
    $(block).css("color", "#fff");
}


$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});