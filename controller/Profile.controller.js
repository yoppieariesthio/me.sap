sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/format/DateFormat"
], function (Controller, MessageToast, DateFormat) {
    "use strict";

    return Controller.extend("yoppieApp.controller.Profile", {
        onInit: function () {
            alert("Profile controller initialized");
        //     // Initialize controller
        //     this._oRouter = this.getOwnerComponent().getRouter();
        //     this._oModel = this.getOwnerComponent().getModel("profile");
        },

     });
});