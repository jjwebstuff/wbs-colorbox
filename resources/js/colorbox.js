  $(window).load(function() {
  	
  	// Initialize the flexslider
    $('.flexslider').flexslider({

    });
    //Initialize Isotope
    var $container = $('#portfolio-container'), $filters = $("#filters a");

    // $container.imagesLoaded(function() {
        $container.isotope({
            itemSelector: '.project',
            masonry: {
                columnWidth: 0
            }
        });
    // });

    // filter items when filter link is clicked
    $filters.click(function() {
        $filters.parent().removeClass("active");
        $(this).parent().addClass("active");
        var selector = $(this).data('filter');
        $container.isotope({filter: selector});
        return false;
    });
  });