const URLPREFIX = "https://desolate-hollows-29433.herokuapp.com"

$("#cancel").click(function(){
	window.location.href = "../index.html";
})

$("#create").click(function(){
	data = {}
	data["username"] = $("#username").val()
	data["password"] = $("#password").val()
	$.ajax({
		url: URLPREFIX + "/users/",
		data: data,
		type: "POST",
		dataType: "json",
		success: function(response){
			window.location.replace("../index.html");
		},
		error: function(response){
			toastr.options = {
                "positionClass": "toast-bottom-center",
                "showDuration": "700",
                "hideDuration": "700",
                "timeOut": "3000",
                "extendedTimeOut": "700",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }
            Command: toastr["error"]("Nao foi possivel criar conta", "erro ao criar")
		},
	});
})