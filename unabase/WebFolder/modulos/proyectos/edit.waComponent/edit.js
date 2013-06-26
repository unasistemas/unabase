
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'edit';
	// @endregion// @endlock
	
	//($comp.userData);

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var textField1 = {};	// @textField
	var textFieldNombreProyecto = {};	// @textField
	// @endregion// @endlock

	// eventHandlers// @lock

	textField1.change = function textField1_change ()// @startlock
	{// @endlock
		sources.proyecto.save();
	};// @lock

	textFieldNombreProyecto.change = function textFieldNombreProyecto_change (event)// @startlock
	{// @endlock
		sources.proyecto.save();
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_textField1", "change", textField1.change, "WAF");
	WAF.addListener(this.id + "_textFieldNombreProyecto", "change", textFieldNombreProyecto.change, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
