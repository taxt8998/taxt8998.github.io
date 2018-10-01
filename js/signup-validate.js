		var testusername = /^[A-Z]{6,12}$/;
		$('#username').change(function(){
			var uname= $(this).val();
			if (!testusername.test(uname)){
				$('#warning').css('display','block');
				$('#form').addClass('has-error');
				$('#btn-signup').attr('disabled','true');
			}
			else{
				$('#warning').css('display','none');
				$('#form').removeClass('has-error');
				$('#btn-signup').removeAttr('disabled');
			}
		});

		$('#password-confirm').change(function(){
			var confirm = $('#password-confirm').val();
			var pass = $('#password').val();
			if (confirm != pass) {
				$('#warning2').css('display','block');
				$('#form').addClass('has-error');
				$('#btn-signup').attr('disabled','true');
			}
			else{
				$('#warning2').css('display','none');
				$('#form').removeClass('has-error');
				$('#btn-signup').removeAttr('disabled');
			}
		});
