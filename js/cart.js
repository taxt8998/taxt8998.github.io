	var quantity = $('#quantity1').html();
		var detailprice = $('#detail-price').html();
		var quantity2 = $('#quantity2').html();
		var detailprice2 = $('#detail-price2').html();
		var total = $('#total').html();
		var cash = $('#cash').html();
		console.log(quantity);
	$('#minus1').click(function(){
		quantity --;
		$('#quantity1').html(quantity);
		console.log(quantity);
		
		detailprice = 499000 * quantity;
		$('#detail-price').html(detailprice);
		total = detailprice + detailprice2;
		$('#total').html(total);
		$('#cash').html(total);
	});

	$('#plus1').click(function(){
		quantity ++;
		$('#quantity1').html(quantity);
		console.log(quantity);

		detailprice = 499000 * quantity;
		$('#detail-price').html(detailprice);
		total = detailprice + detailprice2;
		$('#total').html(total);$('#cash').html(total);
		});

	$('#minus2').click(function(){
		quantity2 --;
		$('#quantity2').html(quantity2);
		console.log(quantity2);

		detailprice2 = 699000 * quantity2;
		$('#detail-price2').html(detailprice2);
		total = detailprice + detailprice2;
		$('#total').html(total);$('#cash').html(total);
	});
	$('#plus2').click(function(){
		quantity2 ++;
		$('#quantity2').html(quantity2);
		console.log(quantity2);
		detailprice2= 699000 * quantity2;
		$('#detail-price2').html(detailprice2);
		total = detailprice + detailprice2;
		$('#total').html(total);$('#cash').html(total);		
	});
		detailprice = 499000 * quantity;
		$('#detail-price').html(detailprice);
		detailprice2= 699000 * quantity2;
		$('#detail-price2').html(detailprice2);
		total = detailprice + detailprice2;
		$('#total').html(total);
		$('#cash').html(total);