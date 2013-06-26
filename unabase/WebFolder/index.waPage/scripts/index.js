
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var loginDialog = {};	// @login
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	loginDialog.logout = function loginDialog_logout (event)// @startlock
	{// @endlock
		$$("loginDialog").hide();
		$$("componentMenu").hide();
		$$("componentModulo").hide();
		$$("componentModulo").removeComponent();
		$$("loginDialog").showLoginDialog();
		

	};// @lock

	loginDialog.login = function loginDialog_login (event)// @startlock
	{// @endlock

		$$("loginDialog").show();
		$$("componentMenu").show();
		$$("componentModulo").show();
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		var isLogged = (WAF.directory.currentUser() !== null);
		if (!isLogged)
			$$("loginDialog").showLoginDialog();
		else
			loginDialog.login();
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("loginDialog", "logout", loginDialog.logout, "WAF");
	WAF.addListener("loginDialog", "login", loginDialog.login, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
