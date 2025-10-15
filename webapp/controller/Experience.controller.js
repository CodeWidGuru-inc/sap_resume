sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";
  return Controller.extend("SapDevPortfolio.controller.Experience", {
    onPress: function (oEvent) {
      var oItem = oEvent.getSource();
      var oCtx = oItem.getBindingContext("Experience");
      var oExperience = oCtx.getObject();
      const oModel = new sap.ui.model.json.JSONModel(oExperience.details);
      var temp = this.getView().setModel(oModel, "detailsModel");
      console.log(this.getView());
      console.log(temp);
      // var oRightSplitArea = this.getView().byId("fillmedaddy");
      // // oRightSplitArea.setText(oExperience.details);
      // oRightSplitArea.
    }
  });
});
