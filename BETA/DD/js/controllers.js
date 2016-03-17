
(function(){   //Start by wrapping the javascript in a closure


	var APCDDataDictionaryApp = angular.module('APCDDataDictionaryApp', []);



		
		APCDDataDictionaryApp.controller('DDCtrl', function ($scope) {
			
			// This code controls the panels
			this.tab=1;

			this.selectTab = function(setTab){
				this.tab=setTab;
				
			};

			this.isSelected = function(checkTab) {
				return this.tab === checkTab;
			};
		
		
		

		
		  // This code loads the data
		  $scope.DC_Data = DC_JSON;
		  $scope.MC_Data = MC_JSON;
		  $scope.ME_Data = ME_JSON;
		  $scope.PC_Data = PC_JSON;
		  $scope.PR_Data = PR_JSON;
		  $scope.PV_Data = PV_JSON;
		  $scope.RN_Data = RN_JSON;
		  
		  
		  
		 
		  
		  
		  
		  
		});		
		
		
		
		

	
	
	
})();  // end my closure