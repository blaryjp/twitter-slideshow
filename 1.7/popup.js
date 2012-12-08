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

(function(){

	window.onload = function () {
	
		var $module_active = document.getElementById("module_active");
		var $twimg_active = document.getElementById("twimg_active");
		
		// Check input checkboxes state.
		if (localStorage['module_active'] == "true")
			$module_active.checked = true;
		else
			$module_active.checked = false;
			
		if (localStorage['twimg_active'] == "true")
			$twimg_active.checked = true;
		else
			$twimg_active.checked = false;
		
		// Bind click events.
		$module_active.onclick = function() {
			var $reload = document.getElementById("reload");
			$reload.className = $reload.className + ", active";
			
			if ($module_active.checked)
				localStorage['module_active'] = "true";
			else
				localStorage['module_active'] = "false";
		}
		$twimg_active.onclick = function() {
			var $reload = document.getElementById("reload");
			$reload.className = $reload.className + ", active";
			
			if ($twimg_active.checked)
				localStorage['twimg_active'] = "true";
			else
				localStorage['twimg_active'] = "false";
		}
	}

})();