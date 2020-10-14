//main page, waterfalling down available options

$("#building").change(function () {
    $("#sRoomFS").prop('disabled', false);
});

$("#sRoom").change(function () {
    $("#submitFS").prop('disabled', false);
});

$("#submitB").click(function () {
    if ($("#building").val() == "McCommas") {
        window.location.href = 'available.html';
        return false;
    } else if ($("#building").val() == "McDonalds") {
        window.location.href = "success.html";
        return false;
    }
    else {
        window.location.href = "failure.html";
        return false;
    }
})

//available page
$('.table > tbody > tr').click(function () {
    if ($(this).closest('table').hasClass("trSelect")) {
        $('tr').removeClass('trActive');
        $(this).unbind('mouseenter mouseleave');
        $(this).addClass('trActive');
    }

});

$('tr').click(function () {
    $("#assignFS").prop('disabled', false);
})

$("#submitA").click(function () {
    window.location.href = 'success.html';
    return false;
})

//failure page
//hide msg
$("#submitC").click(function () {
    $("#msgQueue").show("fast");
    $("#submitC").hide("fast");
});
