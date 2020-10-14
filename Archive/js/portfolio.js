//welcome to my js code, I think everything has been commented relatively well; if you want a better explanation of the fade effects just shoot me an email at joshua@feather-design.com

//detect when page has finished loading
jQuery(window).load(function () {

    var pageLoader = $('#pageLoader');

    //hide page loader when done
    pageLoader.fadeOut('slow');

    //hide all content
    hideAll();
    
    exit($(".fdFooter"));
    $(".fdFooter").fadeOut("fast");
    
    
    //show only mainpage content
        $(".about").each(function () {
            //make visible
            enter(this);
            $(this).delay(200).fadeIn("slow");
        });
        //make footer visible
        enter($(".fdFooter"));
    $(".fdFooter").delay(400).fadeIn("slow");

});

//ready document
$(document).ready(function () {

    //start spinning page loader
    var logo = $('#loadLogo');
    spinLogo(logo);

    //set js to variables
    var webC = $('#webC');
    var printC = $('#printC');
    var mobileC = $('#mobileC');
    var uxC = $('#uxC');
    var aboutC = $('#aboutC');
    var mainPort = $('#mainPort');

    //reset everything first
    webC.prop('checked', false);
    printC.prop('checked', false);
    mobileC.prop('checked', false);
    uxC.prop('checked', false);
    aboutC.prop('checked', false);

    //check if a change has been made
    webC.click(function () {

        //hide alert
        closeAlert();

        //hide all
        hideAll();

        //make visible
        $(".web").each(function () {
            //make visible
            enter(this);
            $(this).delay(200).fadeIn("slow");
        });
    });
    
    //check if a change has been made
    aboutC.click(function () {

        //hide alert
        closeAlert();

        //hide all
        hideAll();

        //make visible
        $(".about").each(function () {
            //make visible
            enter(this);
            $(this).delay(200).fadeIn("slow");
        });
    });

    //check if a change has been made
    mobileC.click(function () {

        //hide alert
        closeAlert();

        //hide all
        hideAll();

        //make visible
        $(".mobile").each(function () {
            //make visible
            enter(this);
            $(this).delay(200).fadeIn("slow");
        });
        
    });

    //check if a change has been made
    printC.click(function () {

        //hide alert
        closeAlert();

        //hide all
        hideAll();

        //make visible
        $(".print").each(function () {
            //make visible
            enter(this);
            $(this).delay(200).fadeIn("slow");
        });
    });

    //check if a change has been made
    uxC.click(function () {

        //hide alert
        closeAlert();

        //hide all
        hideAll();

        //make visible
        $(".ux").each(function () {
            //make visible
            enter(this);
            $(this).delay(200).fadeIn("slow");
        });
    });



});

function closeAlert() {
    $("#navInst").hide();
}

function exit(object) {

    //ease the transition
    TweenLite.to(($('#mainPort')), .2, {
        opacity: 0
        , delay: 0
    });
    TweenLite.to(($('#mainPort')), .2, {
        opacity: 1
        , delay: 0
    });

    //rotate object
    TweenLite.to(object, .5, {
        rotation: 180
    });

    //make object drop
    TweenLite.to(object, .5, {
        y: 200
        , delay: 0
    });
}

function enter(object) {
    //ease in the transition
    TweenLite.to(($('#mainPort')), .2, {
        opacity: 0
    });
    TweenLite.to(($('#mainPort')), .2, {
        opacity: 1
        , delay: 0
    });

    //rotate object back to position
    TweenLite.to(object, .5, {
        rotation: 360
        , delay: 0
    });

    //set object back to center
    TweenLite.to(object, .5, {
        y: 0
        , delay: 0
    });
}

function spinLogo(logo) {

    //begin rotation
    TweenMax.to(logo, 3, {
        rotation: 360
        , ease: Circ.easeInOut
        , repeat: -1
    });

}

function hideAll() {
    $(".mobile").each(function () {
        //hide
        exit(this);
        $(this).fadeOut("fast");
    });
    $(".web").each(function () {
        //hide
        exit(this);
        $(this).fadeOut("fast");
    });
    $(".print").each(function () {
        //hide
        exit(this);
        $(this).fadeOut("fast");
    });
    $(".ux").each(function () {
        //hide
        exit(this);
        $(this).fadeOut("fast");
    });
    $(".about").each(function () {
        //hide
        exit(this);
        $(this).fadeOut("fast");
    });

}

//get width and height
//var getwidth = $(".zoomBlock").width();
//var getheight = $(".zoomBlock").height();

//set width and height
//$(".fdHide").width(getwidth);
//$(".fdHide").height(getheight);



$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});


