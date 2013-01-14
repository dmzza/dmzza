function zeroFill( number, width )
{
	width -= number.toString().length;
	if ( width > 0 )
	{
		return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
	}
	return number + ""; // always return a string
}

function RGB2Color(r,g,b) {
	if(r > 255) r = 255; if(r < 1) r = 0;
	if(g > 255) g = 255; if(g < 1) g = 0;
	if(b > 255) b = 255; if(b < 1) b = 0;
	return '#' + zeroFill(r.toString(16), 2) + zeroFill(g.toString(16), 2) + zeroFill(b.toString(16), 2);
}

$(function() {
	
	var CENTERED = 85; //for a 170px diameter
			total = 4,
			circle = $(".circle").clone(),
			radius = 70;
	
	for(var i = 0; i < total*2; i++) {
		
		var circle = circle.clone(),
				angle = (i * Math.PI * 2) / (total * 2),
				x = radius * Math.cos(angle),
				y = radius * Math.sin(angle);
		
		console.log(x);
		circle.addClass('first-layer');
		circle.css({
			top: y,
			left: x
		});
		circle.appendTo(".circles");
	}
	
	radius = 57;
	for(var i = 0; i < total*2; i++) {
		
		var circle = circle.clone(),
				angle = (i * Math.PI * 2) / (total * 2),
				x = radius * Math.cos(angle),
				y = radius * Math.sin(angle);
		
		console.log(x);
		circle.removeClass('first-layer').addClass('second-layer')
		circle.css({
			width: 140,
			height: 140,
			top: y + 15,
			left: x + 15
		});
		circle.appendTo(".circles");
	}
	
	radius = 44;
	for(var i = 0; i < total*2; i++) {
		
		var circle = circle.clone(),
				angle = (i * Math.PI * 2) / (total * 2),
				x = radius * Math.cos(angle),
				y = radius * Math.sin(angle);
		
		console.log(x);
		circle.removeClass('second-layer').addClass('third-layer')
		circle.css({
			width: 110,
			height: 110,
			top: y + 30,
			left: x + 30
		});
		circle.appendTo(".circles");
	}
	
	radius = 31;
	for(var i = 0; i < total*2; i++) {
		
		var circle = circle.clone(),
				angle = (i * Math.PI * 2) / (total * 2),
				x = radius * Math.cos(angle),
				y = radius * Math.sin(angle);
		
		console.log(x);
		circle.removeClass('third-layer').addClass('fourth-layer')
		circle.css({
			width: 80,
			height: 80,
			top: y + 45,
			left: x + 45
		});
		circle.appendTo(".circles");
	}
	
	// for(var i = 0; i < total*2; i++) {
	// 	var flip = 1,
	// 			j = i;
	// 	if(i > total) {
	// 		j = i - total;
	// 		flip = -1;
	// 	}
	// 	var circle = circle.clone(),
	// 			x = (j * radius) / (total/2),
	// 			y = flip * Math.sqrt(Math.pow(radius, 2) - Math.pow((x-radius), 2));
	// 	
	// 	console.log(x);
	// 	circle.css({
	// 		top: y,
	// 		left: x
	// 	});
	// 	circle.appendTo(".circles");
	// }
	
	// for(var i = 0; i <= total; i++) {
	// 	var circle = circle.clone(),
	// 			x = (i * (Math.PI * 2)) / (total),
	// 			y = Math.sin(x);
	// 	
	// 	console.log(x);
	// 	if(i >= total/2) {
	// 		//y = Math.sin(-x);
	// 		x = x - Math.PI;
	// 	}
	// 	circle.css({
	// 		top: y*100,
	// 		left: x*100
	// 	});
	// 	circle.appendTo(".circles");
	// }
	
	
	//first-layer
	counter = 10;
	
	// setInterval(function() {
	// 	frequency = 1/700;
	// 	now = new Date();
	// 	jan1 = new Date(now.getFullYear(), now.getMonth(), now.getDay(), 0, 0, 0, 0);
	// 	diff = (now - jan1);
	// 	red = Math.floor(Math.sin(frequency*diff + 0) * 127 + 128);
	// 	green = Math.floor(Math.sin(frequency*diff + 2) * 127 + 128);
	// 	blue = Math.floor(Math.sin(frequency*diff + 4) * 127 + 128);
	// 	red2 = Math.floor(Math.sin(frequency*diff + 0.65) * 127 + 128);
	// 	green2 = Math.floor(Math.sin(frequency*diff + 2.65) * 127 + 128);
	// 	blue2 = Math.floor(Math.sin(frequency*diff + 4.65) * 127 + 128);
	// 	
	// 	color = RGB2Color(red, green, blue);
	// 	color2 = RGB2Color(green, blue, red);
	// 	color3 = RGB2Color(blue, red, green);
	// 	//inverse = RGB2Color(256-red, 256-green, 256-blue); //16777215 - color;
	// 	inverse = RGB2Color(red2-100, green2-100, blue2-100);
	// 	//color = color.toString(16);
	// 	//inverse = inverse.toString(16);
	// 	// console.log(color);
	// 	$(".first-layer").css({
	// 		'background-color': color,
	// 		'border-color': inverse
	// 	});
	// 	$(".second-layer").css({
	// 		'background-color': color3,
	// 		'border-color': inverse
	// 	});
	// 	$(".third-layer").css({
	// 		'background-color': color2,
	// 		'border-color': inverse
	// 	});
	// 	$(".fourth-layer").css({
	// 		'background-color': color,
	// 		'border-color': inverse
	// 	});
	// }, 10);
	
	
	//Header background
	counter = 10;
	
	setInterval(function() {
		frequency = 1/60000;
		now = new Date();
		jan1 = new Date(now.getFullYear(), now.getMonth(), now.getDay(), 0, 0, 0, 0);
		diff = (now - jan1);
		red = Math.floor(Math.sin(frequency*diff + 0) * 127 + 128);
		green = Math.floor(Math.sin(frequency*diff + 2) * 127 + 128);
		blue = Math.floor(Math.sin(frequency*diff + 4) * 127 + 128);
		red2 = Math.floor(Math.sin(frequency*diff + 0.65) * 127 + 128);
		green2 = Math.floor(Math.sin(frequency*diff + 2.65) * 127 + 128);
		blue2 = Math.floor(Math.sin(frequency*diff + 4.65) * 127 + 128);
		
		color = RGB2Color(red, green, blue);
		//inverse = RGB2Color(256-red, 256-green, 256-blue); //16777215 - color;
		inverse = RGB2Color(red2-100, green2-100, blue2-100);
		//color = color.toString(16);
		//inverse = inverse.toString(16);
		// console.log(color);
		$(".header").css({
			'background-color': color,
			'color': inverse
		})
	}, 10);
	
	function onScroll(ev) {

		var evnt = ev || window.event, 
				onScroll = [].slice.call(arguments, 1), 
				amount = 0,
				horizontal = 0, 
				vertical = 0;

				// if(Math.abs(evnt.wheelDeltaX) > Math.abs(evnt.wheelDeltaY)) {
				// 	evnt.wheelDeltaY = 0
				// }
				// else
				// console.log(evnt.wheelDeltaX + " " + evnt.wheelDeltaY);
		return 	ev = $.event.fix(evnt), 
						ev.type = "mousewheel", 
						evnt.wheelDelta && (amount = evnt.wheelDelta / 120), 
						evnt.detail && (amount = -evnt.detail / 3), 
						vertical = amount, 
						evnt.axis !== undefined && evnt.axis === evnt.HORIZONTAL_AXIS && (vertical = 0, horizontal = -1 * amount), 
						evnt.wheelDeltaY !== undefined && (Math.abs(evnt.wheelDeltaX) < Math.abs(evnt.wheelDeltaY)) && (horizontal = 0, vertical = evnt.wheelDeltaY / 120), 
						evnt.wheelDeltaX !== undefined && (Math.abs(evnt.wheelDeltaX) > Math.abs(evnt.wheelDeltaY)) && (vertical = 0, horizontal = -1 * evnt.wheelDeltaX / 120), 
						// console.log(horizontal + " " + vertical),
						onScroll.unshift(ev, amount, horizontal, vertical), 
						($.event.dispatch || $.event.handle).apply(this, onScroll)
	}
	var b = ["DOMMouseScroll", "mousewheel"];
	if ($.event.fixHooks) {
		$.event.fixHooks["mousewheel"] = $.event.mouseHooks;
		$.event.fixHooks["DOMMouseScroll"] = $.event.mouseHooks;
	}
	$.event.special.mousewheel = {
		setup: function() {
					if (this.addEventListener)
							for (var a = b.length; a; )
									this.addEventListener(b[--a], onScroll, !1);
					else
							this.onmousewheel = onScroll
			},
		teardown: function() {
					if (this.removeEventListener)
							for (var a = b.length; a; )
									this.removeEventListener(b[--a], onScroll, !1);
					else
							this.onmousewheel = null
			}
	}, 
	$.fn.extend({
		mousewheel: function(a) {
					return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
			},
		unmousewheel: function(a) {
					return this.unbind("mousewheel", a)
			}
	}), 
	$(window).delegate("div.horizontal:not(.nowheeljack) > div, div.horizontal:not(.nowheeljack) > ul, #drawer div.horizontal", "mousewheel", function(ev, delta, deltaX, deltaY) {
		
		if ($(window).scrollLeft() >= $(document).width() - $(window).width() - 10) {
				$('.thumbnails').css("width", "+=240");
				color = Math.floor(Math.random()*16777215)
				inverse = 16777215 - color;
				color = color.toString(16);
				inverse = inverse.toString(16);
				$('<li class="span3"><a href="#" class="thumbnail"><img src="http://placehold.it/220x220/' + color + '/' + inverse + '&text=' + (counter++) + '" alt=""></a></li>').appendTo('ul.thumbnails');
		 }
			var f = !0, 
					g = $(ev.target).closest("#mixData"), 
					h;

			if (g.length) {
					h = g[0];
					if (h.offsetHeight < h.scrollHeight || h.offsetWidth < h.scrollWidth)
							f = !1
			}
			deltaY && f && (this.parentNode.parentNode.scrollLeft -= delta * 30, ev.preventDefault())
			//debugger;
			//document.getElementById("carousel").scrollLeft += 1 * 30;
			//ev.preventDefault();
	});
	
	$(".thumbnails").on("click", "li", function() {
		isPlaceholder = $(this).html().indexOf("220x220");
		isInstagram = $(this).html().indexOf("size=m");
		// start = pos + 8;
		// end = pos + 14;
		// bg = $(this).html().slice(start, end);
		// 
		// $(".header").css('background-color', '#' + bg);
		if(isPlaceholder !== -1)
			$(".header").html($(this).html().replace("220x220", "410x410"));
		if(isInstagram !== -1)
			$(".header").html($(this).html().replace("size=m", "size=l"));
	});
	
	$(".icon-gift").parent().on('click', function() {
		$(".sanity").toggle();
		$(".insanity").toggle();
		if($(".header").css('-webkit-transform') === 'none')
			$(".header").css({ '-webkit-transform': 'rotate(180deg)'});
		else
			$(".header").css({ '-webkit-transform': 'none'});
		
	})
	
	
});