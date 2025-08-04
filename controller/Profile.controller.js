sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/format/DateFormat"
], function (Controller, MessageToast, DateFormat) {
    "use strict";

    return Controller.extend("yoppieApp.controller.Profile", {
        onInit: function () {
            alert("Profile controller initialized");
        }

     });
});