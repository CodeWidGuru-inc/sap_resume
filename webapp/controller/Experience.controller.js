sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";
  return Controller.extend("SapDevPortfolio.controller.Experience", {
    onInit: function () {
      var oPanel = this.getView().byId("exp_panel");
      var startDate = new Date("2018-10-08");
      var currentDate = new Date();
      var totalMonths = (currentDate.getFullYear() - startDate.getFullYear()) * 12;
      totalMonths -= startDate.getMonth();
      totalMonths += currentDate.getMonth();
      var years = Math.floor(totalMonths / 12);
      var months = totalMonths % 12;
      var experienceText = "Total Experience: " + years + " year(s) and " + months + " month(s)";
      oPanel.setHeaderText(experienceText);
    },
    onPress: function (oEvent) {
      var oItem = oEvent.getSource();
      var oCtx = oItem.getBindingContext("Experience");
      var oExperience = oCtx.getObject();
      const oModel = new sap.ui.model.json.JSONModel(oExperience.details);
      var temp = this.getView().setModel(oModel, "detailsModel");
    }
  });
});
