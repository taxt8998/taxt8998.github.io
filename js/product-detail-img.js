	$('#sub-img1').click(function(){
		$('#main-img').attr("src","img/men-product/hmprod (2).jpg");
	});
	$('#sub-img2').click(function(){
		$('#main-img').attr("src","img/men-product/hmprod1.jpg");
	});
	$('#sub-img3').click(function(){
		$('#main-img').attr("src","img/men-product/hmprod (3).jpg");
		
	});
	$('#sub-img4').click(function(){
		$('#main-img').attr("src","img/men-product/hmprod (12).jpg");
	});
	$('#modal-btn').click(function(){
		var src = $('#main-img').attr("src");
		console.log(src);
		$('#modal-img').attr("src",src);

	});