/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"nus/edu/sg/ot_non_ea_detailedreport/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});