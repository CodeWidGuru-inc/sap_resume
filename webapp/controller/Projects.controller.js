sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";
  return Controller.extend("SapDevPortfolio.controller.Projects", {

    onAfterRendering: function () { 
      var oModel = this.getView().getModel("projects");
      var oData = oModel.getData();

      if (oData.length == 0) {
        for (var i = 0; i < 10; i++) {
          var ctrl = this.getView().byId("if_No_project_" + i.toString().padStart(3, "0"));
          if (ctrl) {
              console.log("Found:", ctrl.getId());
              ctrl.setVisible(true);
          }
        }
        var prj = this.getView().byId("projList");
        prj.setVisible(false);        
      } else {
        for (var i = 0; i < 10; i++) {
          var ctrl = this.getView().byId("if_No_project_" + i.toString().padStart(3, "0"));
          if (ctrl) {
              console.log("Found:", ctrl.getId());
              ctrl.setVisible(false);
          }
        }
        var prj = this.getView().byId("projList");
        prj.setVisible(true);         
      }           
    },

    onPress : function(oEvent) {
      var oItem = oEvent.getSource();
      var oCtx = oItem.getBindingContext("projects");
      var oProject = oCtx.getObject();
      var sUrl = oProject.url;
      window.open(sUrl, "_blank");
    },

  });
});
