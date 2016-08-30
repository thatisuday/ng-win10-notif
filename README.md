# win10-notif
Windows 10 style sticky notification for angular.js

***

## Install

```
bower install --save win10-notif
```

> include `angular.min.js`, `angular-animate.min.js`, `win10-notif.min.js` and `win10-notif.min.css` in head section of your page.
>
> Add `thatisuday.win10-notif` in your app's dependencies list.

***

## Options

| key | values | default | role |
|---- | ------ | ------- | ---- |
| title | {String} | 'Windows!'' | Notification title |
| msg | {String} | 'Welcome to Windows 10. We have...'' | Notification message |
| hasImg | {Boolean} | true | Whether to show image icon along with notification |
| imgUrl | valid image url | 'windows10.png' | image to show with notification |
| bgColor | hex, rgba | '#333' | background color of notification |
| timeout | time in milliseconds, null | 5000 | hide notification after {timeout} milliseconds. Use `null` for non-auto-hiding notification. |
| hasButtons | {Boolean} | false | Show action buttons in notification |
| hasAccept | {Boolean} | true | Show accept button |
| hasDecline | {Boolean} | true | Show decline button |
| acceptText | {String} | 'Accept' | Button text for accept button |
| declineText | {String} | 'Decline' | Button text for decline button |

***

## Global config

You can config **win10-notif** globally by using `winNotifOpsProvider` in config block of your app

```
angular
.module('myApp', ['thatisuday.win10-notif'])
.config(function(winNotifOpsProvider){
	winNotifOpsProvider.setOps({
		bgColor : '#3f51b5',
		acceptText : 'Ok',
		declineText : 'Cancel'
	});
});
```

***

## show/hide

use `$winNotif` injectable service in your controller to control notification. You can use `$winNotif.show(options)` to show notification and `$winNotif.hide(callback)` to hide notification.

#### show

You can pass optional `options` object while calling show like `$winNotif.show(options)`. `options` are the same as global config options mentioned above. **But here you can also pass `accept` and `decline` _'key:function'_ pair which are callback for _accept_ and _decline_ user actions.**

#### hide

Hiding notification is pretty simple. You can pass optional callback function like `$winNotif.hide(callback)`.

```
.controller('myCtrl', function($rootScope, $scope, $timeout, $winNotif){
	$timeout(function(){
		$winNotif.show({
			timeout : null,
			hasButtons : true,
			accept : function(){
				// Do on accept

				$winNotif.hide();
			},
			decline : function(){
				// Do on decline

				$winNotif.hide(function(){
					// Martha!!! Why did you say that name?
				});
			}
		});
	}, 1000);
});
```
