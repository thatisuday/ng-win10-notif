// run
angular
.module('thatisuday.win10-notif')
.run(['$rootScope', '$document', '$compile', function($rootScope, $document, $compile){
	if($document.find('win-notif').length == 0){
		$document.find('body').append('<win-notif></win-notif>');
	}
}])
;