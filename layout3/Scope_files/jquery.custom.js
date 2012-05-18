/*-----------------------------------------------------------------------------------

 	Custom JS - All front-end jQuery
 
-----------------------------------------------------------------------------------*/
 
 
/*-----------------------------------------------------------------------------------*/
/*	Superfish Settings - http://users.tpg.com.au/j_birch/plugins/superfish/
/*-----------------------------------------------------------------------------------*/

jQuery(document).ready(function() {
    
    /* Superfish the menu drops ---------------------*/
	jQuery('#primary-nav ul').superfish({
		delay: 200,
		animation: {opacity:'show', height:'show'},
		speed: 'fast',
		autoArrows: false,
		dropShadows: false
	});
	
	/* Home Page Slider ----------------------------*/
	if( jQuery().slides) {
	    var slider = jQuery('#home-slider');
	    
	    slider.slides({
	        preload: true,
			preloadImage: slider.attr('data-loader'), 
			generatePagination: true,
			generateNextPrev: true,
			next: 'slides_next',
			prev: 'slides_prev',
			effect: 'fade',
			crossfade: true,
			autoHeight: true,
			bigTarget: false,
			play: slider.attr('data-speed')
	    });
	}
	
	/* Isotope -------------------------------------*/
	if( jQuery().isotope ) {
	    
	    jQuery(function() {

            var container = jQuery('.isotope'),
                optionFilter = jQuery('#sort-by'),
                optionFilterLinks = optionFilter.find('a');
            
            optionFilterLinks.attr('href', '#');
            
            optionFilterLinks.click(function(){
                var selector = jQuery(this).attr('data-filter');
                container.isotope({ 
                    filter : '.' + selector, 
                    itemSelector : '.isotope-item',
                    layoutMode : 'fitRows',
                    animationEngine : 'best-available'
                });
                
                // Highlight the correct filter
                optionFilterLinks.removeClass('active');
                jQuery(this).addClass('active');
                return false;
            });
            
	    });
    
	}
	
	/* Background fix ------------------------------*/
	$(window).load(function() {    

            var theWindow        = jQuery(window),
                $bg              = jQuery("#background"),
                aspectRatio      = $bg.width() / $bg.height();

            function resizeBg() {

                    if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
                        $bg
                            .removeClass()
                            .addClass('bgheight');
                    } else {
                        $bg
                            .removeClass()
                            .addClass('bgwidth');
                    }

            }

            theWindow.resize(function() {
                    resizeBg();
            }).trigger("resize");

    });
    
    /* Fix IE quirks ------------------------------*/
    if( jQuery('body').hasClass('ie8') || jQuery('body').hasClass('ie7') ) {
        var portfolioImages = jQuery('.post-thumb-overlay').siblings('img');
        
        portfolioImages.hover(
            function() {
                jQuery(this).animate({
                    opacity: .4
                }, 300);
            },
            function() {
                jQuery(this).animate({
                    opacity: 1
                }, 300);
            }
        );
    }
    
    if( jQuery('body').hasClass('ie') && jQuery('body').hasClass('single-portfolio') ) {
        jQuery('.entry-content').columnize({ columns: 2 });
    }
	
	/* Tabs Shortcode ------------------------------*/
	jQuery("#tabs").tabs({ fx: { opacity: 'show' } });
	jQuery(".tabs").tabs({ fx: { opacity: 'show' } });
	
	/* Toggle Shortcode ----------------------------*/
	jQuery(".toggle").each( function () {
		if(jQuery(this).attr('data-id') == 'closed') {
			jQuery(this).accordion({ header: 'h4', collapsible: true, active: false  });
		} else {
			jQuery(this).accordion({ header: 'h4', collapsible: true});
		}
	});

});
