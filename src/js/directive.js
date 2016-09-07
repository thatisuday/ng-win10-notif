// directive
angular
.module('thatisuday.win10-notif')
.directive('winNotif', ['$rootScope', 'winNotifOps', '$timeout', '$sce', function($rootScope, winNotifOps, $timeout, $sce){
	return {
		restrict: 'AE',
		replace : false,
		scope: {},
		template : 	'<div class="win-notif" ng-if="isActive" style="background-color:{{options.bgColor}}">' +
						'<div class="win-notif-image" ng-if="options.hasImg">'+
							'<img ng-src="{{options.imgUrl}}"/>'+
						'</div>' +
						'<div class="win-notif-area">'+
							'<div class="win-notif-title">{{options.title}}</div>' +
							'<div class="win-notif-msg" ng-bind-html="options.msg"></div>' +
						'</div>' + 
						'<div class="win-notif-buttons" ng-show="options.hasButtons">' + 
							'<div class="win-notif-accept-button" ng-show="options.hasAccept" ng-click="options.accept();">{{options.acceptText}}</div>' +
							'<div class="win-notif-decline-button" ng-show="options.hasDecline" ng-click="options.decline();">{{options.declineText}}</div>' +
						'</div>' +
						'<div class="win-notif-close" ng-click="close()">&times;</div>' +
					'</div>',
		link : function(scope, elem, attr){
			
			// Get default options from provider
			scope.options = winNotifOps;

			// Hide notif on bootstrap
			scope.isActive = false;

			// Store timeout promise
			var timeoutPromise = null;

			// Close notification from close icon
			scope.close = function(){
				$rootScope.$emit('$winNotifHide');
			};

			/******************************************************************/
			
			/*
			 *	$rootScope events
			 *	Listen to events and get data to show
			**/

			// Show event
			$rootScope.$on('$winNotifShow', function(event, ops){
				// cancel previous timeout
				$timeout.cancel(timeoutPromise);

				// restore default options
				scope.options = winNotifOps;
				
				// use user provided options
				angular.extend(scope.options, ops);
				
				// santize html
				scope.options.msg = $sce.trustAsHtml(scope.options.msg);

				// display notification element
				scope.isActive = true;

				// hide after timeout seconds
				if(scope.options.timeout){
					timeoutPromise = $timeout(function(){
						$rootScope.$emit('$winNotifHide');
					}, scope.options.timeout);
				}
			});

			// Hide event
			$rootScope.$on('$winNotifHide', function(event, ops){
				// cancel current timeout
				$timeout.cancel(timeoutPromise);

				// remove notification element
				scope.isActive = false;
			});
		}
	}
}]);