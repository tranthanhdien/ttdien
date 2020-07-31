$(function() {
	var connector = function(itemNavigation, carouselStage) {
		return carouselStage.jcarousel('items').eq(itemNavigation.index());
	};

	var carouselStage = $('.carousel-stage').on('jcarousel:reload jcarousel:create', function() {
		var c = $(this);
		var w = c.innerWidth();
		c.jcarousel('items').width(w);
		
	}).jcarousel({
		wrap: 'circular'
	});
	var carouselNavigation = $('.carousel-navigation').jcarousel();
	carouselNavigation.jcarousel('items').each(function() {
		var item = $(this);
		// This is where we actually connect to items.
		var target = connector(item, carouselStage);
		item.on('jcarouselcontrol:active', function() {
			carouselNavigation.jcarousel('scrollIntoView', this);
			item.addClass('active');
		}).on('jcarouselcontrol:inactive', function() {
			item.removeClass('active');
		}).jcarouselControl({
			target: target,
			carousel: carouselStage
		});
	});
	// Setup controls for the stage carousel
	$('.prev-stage').on('jcarouselcontrol:inactive', function() {
		$(this).addClass('inactive');
	}).on('jcarouselcontrol:active', function() {
		$(this).removeClass('inactive');
	}).jcarouselControl({
		target: '-=1'
	});
	$('.next-stage').on('jcarouselcontrol:inactive', function() {
		$(this).addClass('inactive');
	}).on('jcarouselcontrol:active', function() {
		$(this).removeClass('inactive');
	}).jcarouselControl({
		target: '+=1'
	});
	// Setup controls for the navigation carousel
	$('.prev-navigation').on('jcarouselcontrol:inactive', function() {
		$(this).addClass('inactive');
	}).on('jcarouselcontrol:active', function() {
		$(this).removeClass('inactive');
	}).jcarouselControl({
		target: '-=1'
	});
	$('.next-navigation').on('jcarouselcontrol:inactive', function() {
		$(this).addClass('inactive');
	}).on('jcarouselcontrol:active', function() {
		$(this).removeClass('inactive');
	}).jcarouselControl({
		target: '+=1'
	});
});