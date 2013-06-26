
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'proyectos';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var dataGridProyectos = {};	// @dataGrid
	// @endregion// @endlock

	// eventHandlers// @lock

	dataGridProyectos.onRowDblClick = function dataGridProyectos_onRowDblClick (event)// @startlock
	{// @endlock
		$$("componentModulo").loadComponent({
			path:"/modulos/proyectos/edit.waComponent",
			userData: {
				id: event.data.row.cells[0].value
			}
		});
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_dataGridProyectos", "onRowDblClick", dataGridProyectos.onRowDblClick, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
