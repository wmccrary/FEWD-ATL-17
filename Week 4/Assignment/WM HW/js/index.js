$(document).ready(function() {
	
	$('.readmore').click(showparagraph);
		function showparagraph(e){
			e.preventDefault();
		
		$('#show-this-on-click').slidedown();
		$('readmore').hide();
		$('.readless').show();

	$('.readless').click(function)(e){
		e.preventDefault();
	}

	}






	

	$('.readmore a').click();(showparagraph);

	(function(){
		$('#show-this-on-click').slideDown();
	});
	$('.readmore a').click(function(){
		$('.readless hide a').show();
	});
	$('.readmore a').click(function){
		$('.readmore a').hide();
	}

	$('.readless').click(function){
		$('p').slideup();
	}
	$('.readless').click(function){
		$('p').hide();
	}

	$('.readless').click(function){
		$('readmore a').show();
	}
	$('.learnmore').click(function){
		$('span p').slideDown();
	}
	$('.learnmore').click(function){
		$('.learnmore').hide();
	}
	

}); //end ready
