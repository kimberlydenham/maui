$(document).ready(function() { 
	/**
	* Resizes an inner element's font so that the inner element completely fills the outer element.
	* @author Russ Painter WebDesign@GeekyMonkey.com
	* @version 0.1
	* @param {Object} Options which are maxFontPixels (default=40), innerTag (default='span')
	* @return All outer elements processed
	* @example <div class='mybigdiv filltext'><span>My Text To Resize</span></div>
	*/
	$.fn.textfill = function(options) {
		var defaults = {
			maxFontPixels: 15,
			innerTag: 'span'
		};
		var Opts = jQuery.extend(defaults, options);
		return this.each(function() {
			var fontSize = Opts.maxFontPixels;
			var ourText = $(Opts.innerTag + ':visible:first', this);
			var maxHeight = 35;//$(this).height();
			var maxWidth = 155;//$(this).width();
			var textHeight;
			var textWidth;
			do {
				ourText.css('font-size', fontSize);
				textHeight = ourText.height();
				textWidth = ourText.width();
				fontSize = fontSize - 1;
			} while ((textWidth > maxWidth) && fontSize > 3);
		});
	};

	$('.autosize span').css("width","180px");
	$('.autosize').textfill({ maxFontPixels: 50, innerTag: 'span' }); 

	});



