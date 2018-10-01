	var s = ["img/521679_0P310_2590_001_100_0000_Light-Flashtrek-GG-high-top-sneaker.jpg", "img/543149_9PYN0_4362_001_100_0000_Light-Flashtrek-sneaker.jpg","img/548714_D6060_1088_001_100_0000_Light-Flashtrek-high-top-sneaker-with-wool.jpg"];
	var i=0;
	var j=0
	var t = [ "img/541061_0U14X_3862_001_075_0021_Light-Laminated-leather-small-shoulder-bag.jpg","img/541061_0U14X_5879_001_075_0025_Light-Laminated-leather-small-shoulder-bag.jpg","img/524822_0PLJX_8346_001_065_0000_Light-Standard-double-shoulder-bag.jpg"]
	$(document).ready(function(){
		setInterval(function changeShoes(){
			$('#shoes-img').fadeOut('slow',function(){
					$(this).attr("src",s[i]);
					$(this).fadeIn('slow');
			});
			if (i==s.length) {i=0}
			else i++;
			console.log(i);		
		},3000);
		setInterval(function changeBags(){
			$('#bags-img').fadeOut('slow',function(){
					$(this).attr("src",t[j]);
					$(this).fadeIn('slow');
			});
			if (j==t.length) {j=0}
			else j++;
			console.log(j);		
		},3000);
	});
