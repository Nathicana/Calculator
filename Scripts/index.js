$(document).ready(function(){


var result = 0;

	$("#plus").click(function(){
		var numbers = $("#numbers").val();

		$("#numbers").val(numbers + "+");
	});



	$("#minus").click(function(){
		var numbers = $("#numbers").val();

		$("#numbers").val(numbers + "-");
	});

	$("#divide" ).click(function(){
		var numbers = $("#numbers").val();

		$("#numbers").val(numbers + "/");
	});

	$("#multiply" ).click(function(){
		var numbers = $("#numbers").val();

		$("#numbers").val(numbers + "*");
	});

	$("#calculate").click(function(){
		var numbers = $("#numbers").val();

		alert(eval(numbers));
	});

})

