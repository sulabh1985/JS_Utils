function Utility(){
	var _showElementById = function(elementId){
		document.getElementById(elementId).style.display='none';
	};
	var _showElementByIds = function(elementIds){
		numbers.forEach(function(element) {
			this._showElementById(element);
		});
	};
	return {
		showElementById:_showElementById
		showElementByIds:_showElementByIds
	};
}

