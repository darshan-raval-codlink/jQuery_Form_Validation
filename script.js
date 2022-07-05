jQuery('#frm').validate({
	rules:{
		name:"required",
		email:{
			required:true,
			email:true
		},
		password:{
			required:true,
			minlength:5
		},
		cpassword:{
			required:true,
			minlength:8
		},
		phonenumber:{
			required:true,
			minlength:10
		}, 
		
	},messages:{
		name:"Please enter your name",
		email:{
			required:"Please enter email",
			email:"Please enter valid email",
		},
		password:{
			required:"Please enter your password",
			minlength:"Password must be 5 char long"
		},
		cpassword:{
			required:"Please re-enter your password",
			minlength:"Password must be 8 char long"
		},
		phonenumber:{
			required:"Please enter your phone number",
			minlength:"phone number must be 10 char long"
		},
	},
	submitHandler:function(form){
		form.submit();
	}
});