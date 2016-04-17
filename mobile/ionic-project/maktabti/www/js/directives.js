angular.module('starter.directives', [])
	.directive('backImg', function($window) {
		return {
			restrict: 'A',
			link: function(scope, element, attrs) {
				attrs.$observe('backImg', function(url) {
					if (url) {
						element.css({
							'background-image': 'url(' + url + ')',
							'background-size': 'cover',
							'height': $window.innerHeight + 'px',
							'background-position': 'center'
						});
					}
				})
			}
		}
	})
