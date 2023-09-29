/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"espacio_listado/modulo_listado/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
