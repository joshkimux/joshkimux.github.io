function change() {
	
	var title = $('#title').val();
	var description = $('#description').val();
	
	//clear out box
	$('.smallboxright').empty();
	
	//append to the stuff
	$('.smallboxright').append('<h2>' + title + '</h2><hr/><p>' + description + '</p>');
	
	
	
}

function preview() {
	var pTitleFont = $('#pTitleFont').val();
	var pTextFont = $('#pTextFont').val();
	
	$('.previewtitle').css("font-family", pTitleFont + ', sans-serif');
	$('.previewtext').css("font-family", pTextFont + ', sans-serif');
	
}

//just to make stuff more user friendly
$('#title').focus(function() {
	$('#title').empty();
	$(this).css("color", "#424242");
});

$('#description').focus(function() {
	$('#description').empty();
	$(this).css("color", "#424242");
});
