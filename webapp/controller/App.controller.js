sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";
  return Controller.extend("SapDevPortfolio.controller.App", {
    onInit: function() {
      var oModel = new sap.ui.model.json.JSONModel({
        themeImage: "images/light_mode.png" // default image path
      });
      this.getView().setModel(oModel);
    },
    onToggleTheme: function(oEvent) {
      console.log("Toggle button pressed");
      var bPressed = oEvent.getParameter("state");
      var sTheme = bPressed ? "sap_horizon" : "sap_horizon_dark";
      sap.ui.getCore().applyTheme(sTheme);
    }
  });
});
