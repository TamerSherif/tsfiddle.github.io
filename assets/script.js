
	function updateCode(){

		$("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>"); 

		document.getElementById("outputPanel").contentWindow.eval($("#jsPanel").val());
	

	}
	
	$(".switchButton").hover(function(){

		$(this).addClass("highlighted");

			}, function(){

		$( this ).removeClass("highlighted");


});

		$(".switchButton").click(function(){

		$( this ).toggleClass("selected");
		$(this).removeClass("highlighted");

		var panelId = $(this).attr("id") + "Panel";

		$("#" + panelId).toggleClass("hidden");
		var numOfSelectedPanels = 4 - $('.hidden').length
		$(".panel").width(($(window).width()/numOfSelectedPanels)-10);


});

		$(".panel").height($(window).height() - $("#header").height());
		$(".panel").width(($(window).width()/2)-10);
		updateCode();
		
		//which changes the whole contents of the html tag

		$("textarea").on('change keyup paste', function() {
			updateCode();
		

});