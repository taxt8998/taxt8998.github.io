		$(window).scroll(function(){
			var top = $(window).scrollTop();
			if(top>300){
				$('#navbar').addClass('navbar-fixed-top');
			}
			else{
				$('#navbar').removeClass('navbar-fixed-top');
			}
		});

		