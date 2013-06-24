
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'proyectos';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var buttonSearch = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	buttonSearch.click = function buttonSearch_click (event)// @startlock
	{// @endlock

	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_buttonSearch", "click", buttonSearch.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
