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
      var bPressed = oEvent.getParameter("state");
      var sTheme = bPressed ? "sap_horizon" : "sap_horizon_dark";
      sap.ui.getCore().applyTheme(sTheme);
    },
    onLinkedInPress: function() {
      var sUrl = "https://www.linkedin.com/in/guruteja-chilukoti";
      window.open(sUrl, "_blank");
    },

    ongitPress: function() {
      var msg = "Coming Soon!";
      sap.m.MessageToast.show(msg);
    },

    download_resume: function() {
      var sUrl = "assets/Guruteja_Chilukoti_Resume_7.5yrs.pdf";
      window.open(sUrl, "_blank");
    },

    home: function() {
      // Get the reference to the Skills IconFilter
      var oSkillsTab = this.byId("iconTabBar");
      var currentKey = oSkillsTab.getSelectedKey();
      // Update the selection state of the Skills IconFilter
      if (currentKey === "skills") {
        return;
      } else {
        oSkillsTab.setSelectedKey("skills");
      } 
    }
  });
});
