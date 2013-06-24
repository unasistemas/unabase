
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'menu';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var menuItemProyectos = {};	// @menuItem
	// @endregion// @endlock

	// eventHandlers// @lock

	menuItemProyectos.click = function menuItemProyectos_click (event)// @startlock
	{// @endlock
		$$("componentModulo").loadComponent("/modulos/proyectos/proyectos.waComponent");
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_menuItemProyectos", "click", menuItemProyectos.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
