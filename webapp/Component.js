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
      this.setModel(oSkills, "skills");
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