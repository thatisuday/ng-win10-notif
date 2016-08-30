// factory
angular
.module('thatisuday.win10-notif')
.factory('$winNotif', ['$rootScope', function($rootScope){
	return {
		show : function(ops){
			$rootScope.$emit('$winNotifShow', ops);
		},

		hide : function(callback){
			$rootScope.$emit('$winNotifHide');
			if(callback) callback();
		}
	}
}]);