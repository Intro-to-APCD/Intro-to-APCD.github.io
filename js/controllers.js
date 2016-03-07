
(function(){   //Start by wrapping the javascript in a closure


	var IntoToAPCDApp = angular.module('IntoToAPCDApp', []);



		
		IntoToAPCDApp.controller('MyCtrl', function ($scope) {
			
			// This code controls the panels
			this.tab=1;

			this.selectTab = function(setTab){
				this.tab=setTab;
				
				// scroll to the top of the page whenever the panel is changed
				window.scrollTo(0,0);
				
			};

			this.isSelected = function(checkTab) {
				return this.tab === checkTab;
			};
		

		});		
		

	
})();  // end my closure