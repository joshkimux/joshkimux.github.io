// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $('#myBtn').slideDown("swing");
    } else {
        $('#myBtn').slideUp("swing");
    }
}

// Animate cards on load
$(document).ready(function () {
    var pageTop2 = $(document).scrollTop()
    var pageBottom2 = pageTop2 + $(window).height()
    var tags2 = $("section")

    for (var i = 0; i < tags2.length; i++) {
        var tag2 = tags2[i]

        if ($(tag2).position().top < pageBottom2) {
            $(tag2).addClass("visible")
        } else {
            $(tag2).removeClass("visible")
        }
    }
})

// Animate recommend a book
$(window).scroll(function () {
    // This is then function used to detect if the element is scrolled into view
    function elementScrolled(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
    }

    // This is where we use the function to detect if ".box2" is scrolled into view, and when it is add the class ".animated" to the <p> child element
    if (elementScrolled(document.getElementById('bookRec'))) {
        var bookRec = $(document.getElementById('bookRec'));
        bookRec.animate({
            fontSize: '2.5em'
        }, "slow");
    }


});

// Animate cards on scroll
$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop()
    var pageBottom = pageTop + $(window).height()
    var tags = $("section")

    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i]

        if ($(tag).position().top < pageBottom) {
            $(tag).addClass("visible")
        } else {
            $(tag).removeClass("visible")
        }
    }
})

//facts

var factNumber = 0

var factList = [
    '<p>Since growing up as a kid in Hawaii I\'ve been practicing and playing the ukulele. I got kinda good at it, and have performed as an <a href="https://www.youtube.com/watch?v=y2ygeiN_EaQ" target="_blank">ukulele busker</a> from Old Town Alexandria to overseas in Seoul as part of the busking group MUA.</p><p> Most recently, I won at the Deloitte\'s Got Talent show! (Super cheesy, I know).</p>',
    '<p>I play <i>alot</i> of tennis. I used to hit against a wall for hours since we were too broke for lessons. Side note, I\'m a HUGE fan of Kei Nishikori.</p><p>I also created a collection of <a href="misc.html#misc-tennis" target="_blank">tennis posters</a> in my free time during undergrad. Roger Federer liked a poster I made of him on twitter which is my life\'s greatest accomplishment.</p>',
    '<p>I have a passion for understanding people and their cultures ever since joining Virginia Tech\'s Students for Peace and Justice in Palestine chapter.</p><p> Despite knowing little more than the average American at first, it became an incredible experience for me which culminated into a debke performance at a street fair along with a year long tenure as co-president.</p>',
    '<p>We\'re basically friends now at this point, but I want to learn more about you!</p><p> Shoot me a text at <b><a href="sms:+15713021504">571-302-1504</a></b>, and if you\'re local, let\'s get coffee too.</p>',
]

var factPic = [
    '<img src="img/about/ukulele.jpg" style="width:100%;" /><p>04.2017. Performing at the gate of Yonsei university.</p>',
    '<img src="img/about/tennis.jpg" style="width:100%;" /><p>10.2018. Kei Nishikori about to serve against Zverev at the D.C. Citi Open.</p>',
    '<img src="img/about/palestine.jpg" style="width:100%;"/><p>04.2013. Dancing at the Virginia Tech International Street Fair.</p>',
    '<img src="img/about/deloitte.gif" style="width:100%;"/><p>05.2019. Me with my party parrot crew.</p>',
]

var buttonFactList = [
    'And Another!',
    'Another One, Oprah Style!',
    'Running low here...',
]

function getFact() {

    if (factNumber < 3) {
        document.getElementById('buttonFact').innerText = buttonFactList[factNumber];
        document.getElementById('factDiv').innerHTML = factList[factNumber];
        document.getElementById('factPicDiv').innerHTML = factPic[factNumber];
        factNumber += 1;
    } else {
        document.getElementById('buttonFact').disabled = true;
        document.getElementById('buttonFact').innerText = 'Pls Stop Pressing';
        document.getElementById('factDiv').innerHTML = factList[factNumber];
        document.getElementById('factPicDiv').innerHTML = factPic[factNumber];
        factNumber = 0;
    }
}

//copy
function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execfCommand("copy");
    $temp.remove();
}

//read more
$('.readMore').click(function () {
    var $this = $(this);
    $this.toggleClass('readMore');
    if ($this.hasClass('readMore')) {
        $this.text('Read More >');
    } else {
        $this.text('Read Less ^');
    }
});

//read more
$('.viewList').click(function () {
    var $this = $(this);
    $this.toggleClass('viewList');
    if ($this.hasClass('viewList')) {
        $this.text('View the List >');
    } else {
        $this.text('Close the List ^');
    }
});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    $("html, body").animate({
        scrollTop: "0px"
    }, );
}

$(document).ready(function () {
    var x = document.getElementsByClassName("stickybox");
    Array.protoype.forEach.call(x, function(y) {
   y.style.transform = "rotate(180deg)";
});
})