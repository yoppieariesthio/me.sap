sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
    "use strict";

    return Controller.extend("yoppieApp.controller.Profile", {
        onInit: function () {
            alert("Profile controller initialized");
            var myModel = this.getView().getModel("localProfileModel"); //this.getOwnerComponent().getModel("localProfileModel"); //
            console.log(myModel.getData());
        }

     });
});