/*
Author       : themes_mountain
Template Name: Janemon - Personal Portfolio Template
Version      : 1.0
*/
(function ($) {
	'use strict';

	jQuery(document).on('ready', function () {

		/*PRELOADER JS*/
		$(window).on('load', function () {
			$('.status').fadeOut();
			$('.preloader').delay(350).fadeOut('slow');
		});
		/*END PRELOADER JS*/

		/*START MENU JS*/
		function windowScroll() {
			const navbar = document.getElementById("navbar");
			if (
				document.body.scrollTop >= 50 ||
				document.documentElement.scrollTop >= 50
			) {
				navbar.classList.add("nav-sticky");
			} else {
				navbar.classList.remove("nav-sticky");
			}
		}

		window.addEventListener('scroll', (ev) => {
			ev.preventDefault();
			windowScroll();
		})
		/*END MENU JS*/

		/*START PROGRESS BAR*/
		$('.progress-bar > span').each(function () {
			var $this = $(this);
			var width = $(this).data('percent');
			$this.css({
				'transition': 'width 2s'
			});

			setTimeout(function () {
				$this.appear(function () {
					$this.css('width', width + '%');
				});
			}, 500);
		});
		/*END PROGRESS BAR*/

		/* START COUNTDOWN JS*/
		$('.counter_feature').on('inview', function (event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).find('.counter-num').each(function () {
					var $this = $(this);
					$({ Counter: 0 }).animate({ Counter: $this.text() }, {
						duration: 2000,
						easing: 'swing',
						step: function () {
							$this.text(Math.ceil(this.Counter));
						}
					});
				});
				$(this).unbind('inview');
			}
		});
		/* END COUNTDOWN JS */

		/* START JQUERY LIGHTBOX*/
		jQuery('.lightbox').venobox({
			numeratio: true,
			infinigall: true
		});
		/* END JQUERY LIGHTBOX*/

		/* START MIX JS */
		$('.portfolio_item').mixItUp({

		});

	});

	/* START PARALLAX JS */
	/* Parallax functionality removed - replaced by CSS slider */
	/* END PARALLAX JS  */

	/*START WOW ANIMATION JS*/
	new WOW().init();
	/*END WOW ANIMATION JS*/

	/* START FUNFACT BACKGROUND SLIDER */
	(function () {
		const slides = document.querySelectorAll('.funfact-slider .slide');
		if (slides.length === 0) return;

		let currentSlide = 0;
		const slideInterval = 4000; // 4 seconds per slide

		function nextSlide() {
			slides[currentSlide].classList.remove('active');
			currentSlide = (currentSlide + 1) % slides.length;
			slides[currentSlide].classList.add('active');
		}

		setInterval(nextSlide, slideInterval);
	})();
	/* END FUNFACT BACKGROUND SLIDER */

	/* END FUNFACT BACKGROUND SLIDER */

	/* START ACTIVE NAVIGATION ON SCROLL */
	const sections = document.querySelectorAll('section[id]');
	const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

	if (sections.length > 0 && navLinks.length > 0) {
		const observerOptions = {
			root: null,
			rootMargin: '-45% 0px -45% 0px', // Checks for intersection in the middle 10% of viewport
			threshold: 0
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const id = entry.target.getAttribute('id');

					// Remove active class from all links
					navLinks.forEach(link => {
						link.classList.remove('active');
						if (link.getAttribute('href') === '#' + id) {
							link.classList.add('active');
						}
					});
				}
			});
		}, observerOptions);

		sections.forEach(section => {
			observer.observe(section);
		});
	}
	/* END ACTIVE NAVIGATION ON SCROLL */

})(jQuery);



