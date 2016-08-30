// provider
angular
.module('thatisuday.win10-notif')
.provider('winNotifOps', function(){
	var defOps = {
		title 				: 	'Windows!',
		msg 				: 	'Welcome to Windows 10. We have awesome apps and new browser just for you. Wanna download?',
		hasImg 				: 	true,
		imgUrl 				: 	'http://icons.iconarchive.com/icons/dakirby309/windows-8-metro/48/Folders-OS-Windows-8-Metro-icon.png',
		bgColor				: 	'#333',
		timeout 			: 	5000,
		hasButtons 			: 	false,
		hasAccept 			: 	true,
		hasDecline 			: 	true,
		acceptText 			: 	'Accept',
		declineText 		: 	'Decline'
	};

	return {
		setOps : function(newOps){
			angular.extend(defOps, newOps);
		},
		$get : function(){
			return defOps;
		}
	}
});