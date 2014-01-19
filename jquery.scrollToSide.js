/*!
 * jQuery.scrollToSide v0.0.2 - Easy scroll an element to a side of viewport
 * By Death_Miner - MIT License
 */

(function($){
	
	/**
	 * Scrolls an element to a side of the viewport
	 * @param  string   side     The target side of the viewport, can be "top" or "bottom"
	 * @param  object   options  The options object, can be ommited. See default_options for the list of avaible options
	 * @param  function callback A function to execute when the animation is finished
	 * @return object            The current jQuery object, to allow continue function chaining
	 */
	$.fn.scrollToSide = function(side, options, callback){

		/**
		 * @var object   _this           The jQuery object (not JQ initialized)
		 * @var object   $_this          The jQuery object
		 * @var object   default_options The default options
		 * @var int      scrollOffset    Where to scroll (will be calculated later)
		 * @var function callback        If callback is null, create a blank function
		 */
		var _this = this,
			$_this = $(_this),
			default_options = {
				container: "html, body", // A selector of the viewport that scrolls
				offset: 0,         // Offset from side of the element in px
				animated: true,    // If it animates
				duration: "fast"   // The animation speed, can be "fast", "normal", "slow" or a number of milliseconds
			},
			scrollOffset = 0,
			callback = callback || function(){};

		// Override default options by theses provided by the options argument
		options = $.extend({}, default_options, options);

		// Calculate pixels
		if(side == "top"){

			// From top
			scrollOffset = $_this.offset().top - options.offset - $(options.container).offset().top + $(options.container).scrollTop();
		}
		else if(side == "bottom"){

			// From bottom
			scrollOffset = $_this.offset().top - $(options.container).offset().top - $(options.container).height() + $_this.height() + options.offset;
		}
		else{

			// There's not a valid side, reporting error
			console.error("Not valid side \""+side+"\" passed to jquery.scrollToSide");
		}

		// Scrolling
		if(options.animated){

			// With animation
			$(options.container).animate({
				scrollTop: scrollOffset
			}, options.duration, callback);
		}
		else{

			// Without animation
			$(options.container).scrollTop(scrollOffset);

			// Execute callback since there's no animation
			callback();
		}

		// Return current jQ object
		return $_this;
	};
})(jQuery)