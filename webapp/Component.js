sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/model/json/JSONModel",
  "sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel, ResourceModel) {
  "use strict";
  return UIComponent.extend("SapDevPortfolio.Component", {
    metadata: {
      interfaces: ["sap.ui.core.IAsyncContentCreation"],
      manifest: "json"
    },
    init: function () {
      UIComponent.prototype.init.apply(this, arguments);
      var oSkills = new JSONModel("model/skills.json");
      oSkills.attachRequestCompleted(function() {
      var aSkills = oSkills.getData(); // This is your array

      // Filter arrays for each skill type
      var aTech = aSkills.filter(function(item) { return item.type === "technical"; });
      var aMod = aSkills.filter(function(item) { return item.type === "module"; });
      var aSoft = aSkills.filter(function(item) { return item.type === "soft"; });

      // Set filtered models for each GridList
      this.setModel(new sap.ui.model.json.JSONModel(aTech), "techSkills");
      this.setModel(new sap.ui.model.json.JSONModel(aMod), "modSkills");
      this.setModel(new sap.ui.model.json.JSONModel(aSoft), "softSkills");
      }.bind(this));
      
      var oProjects = new JSONModel("model/projects.json");
      this.setModel(oProjects, "projects");
      var oExperience = new JSONModel("model/experience.json");
      this.setModel(oExperience, "experience");
      var i18nModel = new ResourceModel({
        bundleName: "SapDevPortfolio.i18n.i18n"
      });
      this.setModel(i18nModel, "i18n");
    }
  });
});