/**
 *	"Please bring back photo grid view !"
 *	Copyright (c) 2012 Jean-Philippe Blary <contact@blary.be>.
 *
 *	This program is free software: you can redistribute it and/or modify
 *	it under the terms of the GNU General Public License as published by
 *	the Free Software Foundation, either version 3 of the License, or
 *	(at your option) any later version.
 *	
 *	This program is distributed in the hope that it will be useful,
 *	but WITHOUT ANY WARRANTY; without even the implied warranty of
 *	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *	GNU General Public License for more details.
 *	
 *	You should have received a copy of the GNU General Public License
 *	along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

// Fired when current URL is updated.
function checkUrl(tabId, changeInfo, tab) {
	// Fire the module only if we are into the Twitter slideshow.
	if ( ( tab.url.indexOf('http://twitter.com') == 0 ||
		   tab.url.indexOf('https://twitter.com') == 0 ||
		   tab.url.indexOf('http://www.twitter.com') == 0 ||
		   tab.url.indexOf('https://www.twitter.com') == 0 ) &&
		 ( tab.url.indexOf('media/slideshow') > 0 ||
		   tab.url.indexOf('media/grid') > 0) ) {
		   
		// Show the page action.
		chrome.pageAction.show(tabId);
		
		// Ensure no undefined vars.
		if (typeof localStorage['twimg_active'] == 'undefined')
			localStorage['twimg_active'] = "false";
			
		// Fire the module.
		if (moduleIsActive())
			chrome.tabs.executeScript(tabId, { code: "twimg_active='" + localStorage['twimg_active'] + "';" }, function() {
				chrome.tabs.executeScript(tabId, { file: "engine.js" });
			});
	}
};

// Check if user has activated the module.
function moduleIsActive() {
	var ret = false;

	if (typeof localStorage['module_active'] == 'undefined') {
		localStorage['module_active'] = "true";
		ret = true;
	} else {
		if (localStorage['module_active'] == "true")
			ret = true;
	}
	
	return ret;
};

// Check updates of the URL.
chrome.tabs.onUpdated.addListener(checkUrl);