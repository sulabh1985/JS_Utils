function Utility(){
	var _showElementById = function(elementId){
		document.getElementById(elementId).style.display='';
	};
	var _showElementByIds = function(elementIds){
		elementIds.forEach(function(element) {
			_showElementById(element);
		});
	};
	var _hideElementById = function(elementId){
		document.getElementById(elementId).style.display='none';
	};
	var _hideElementByIds = function(elementIds){
		elementIds.forEach(function(element) {
			_hideElementById(element);
		});
	};	
	return {
		showElementById:_showElementById,
		showElementByIds:_showElementByIds,
		hideElementById:_hideElementById,
		hideElementByIds:_hideElementByIds		
	};
}

