$.validator.addMethod("strongpassword",function(value){
	return /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(value);
},"Please Enter Strong Password");

$.validator.addMethod('filesize', function(value, element, param) {
    return this.optional(element) || (element.files[0].size <= param)
});

jQuery('#frm').validate({
	rules:{
		name:"required",
		email:{
			required:true,
			email:true
		},
		password:{
			required:true,
			minlength:8
		},
		cpassword:{
			required:true,
			minlength:8,
			equalTo: "#password"
		},
		phonenumber:{
			required:true,
			minlength:10
		}, 
		// dob:{
		// 	required:true,
		// 	date:true
		// }, 
		gender: {
			required:true,
		}
	
		
	},messages:{
		name:"Please enter your name",
		email:{
			required:"Please enter email",
			email:"Please enter valid email",
		},
		password:{
			required:"Please enter your password",
			minlength:"Password must be 8 char long"
		},
		cpassword:{
			required:"Please re-enter your password",
			minlength:"Password must be 8 char long",
			equalTo: "password must be same"
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