sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"nus/edu/sg/ot_non_ea_detailedreport/model/models",
	"nus/edu/sg/ot_non_ea_detailedreport/utils/appconstant",
	"nus/edu/sg/ot_non_ea_detailedreport/utils/configuration",
	"nus/edu/sg/ot_non_ea_detailedreport/utils/dataformatter",
	"nus/edu/sg/ot_non_ea_detailedreport/utils/massuploadhelper",
	"nus/edu/sg/ot_non_ea_detailedreport/utils/services"	
], function (UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("nus.edu.sg.ot_non_ea_detailedreport.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		},
		/**
		 * Make the UI Elements in compact size
		 */
		getContentDensityClass: function () {
			if (!this._sContentDensityClass) {
				// if (!Device.support.touch) {
				if (Device.support.touch) {
					this._sContentDensityClass = "sapUiSizeCompact";
				} else {
					this._sContentDensityClass = "sapUiSizeCozy";
				}
			}
			return this._sContentDensityClass;
		}		
	});
});