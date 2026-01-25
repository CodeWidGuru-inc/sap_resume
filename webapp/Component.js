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
      //Begin-------------Skills Model---------------
      var oSkills = new JSONModel("model/skills.json");
      oSkills.attachRequestCompleted(function() {
      var aSkills = oSkills.getData(); // This is your array

      // Filter arrays for each skill type
      var aTech = aSkills.filter(function(item) { return item.type === "technical"; });
      var aAI = aSkills.filter(function(item) { return item.type === "AI"; });
      var aTools = aSkills.filter(function(item) { return item.type === "tools"; });
      var aMod = aSkills.filter(function(item) { return item.type === "module"; });
      var aSoft = aSkills.filter(function(item) { return item.type === "soft"; });

      // Set filtered models for each GridList
      this.setModel(new sap.ui.model.json.JSONModel(aTech), "techSkills");
      this.setModel(new sap.ui.model.json.JSONModel(aTools), "toolSkills");
      this.setModel(new sap.ui.model.json.JSONModel(aMod), "modSkills");
      this.setModel(new sap.ui.model.json.JSONModel(aAI), "aiSkills");
      this.setModel(new sap.ui.model.json.JSONModel(aSoft), "softSkills");
      }.bind(this));
      //End---------------Skills Model---------------

      //Begin-------------Projects Model---------------
      var oProjects = new JSONModel("model/projects.json");
      this.setModel(oProjects, "projects");

      //Begin-------------Experience Model---------------
      var oExperience = new JSONModel("model/experience.json");
      oExperience.attachRequestCompleted(function() {
      var aExperience = oExperience.getData(); // This is your array

      // Filter arrays for each skill type
      // var aAccenture = aExperience.filter(function(item) { return item.id === "Accenture"; });
      // var aInfosys = aExperience.filter(function(item) { return item.id === "Infosys"; });

      // Set filtered models for each GridList
      // this.setModel(new sap.ui.model.json.JSONModel(aAccenture), "Accenture");
      // this.setModel(new sap.ui.model.json.JSONModel(aInfosys), "Infosys");
        this.setModel(new sap.ui.model.json.JSONModel(aExperience), "Experience");
        var details = aExperience.map(function(item) { return {id: item.id, details: item.details} });
        this.setModel(new sap.ui.model.json.JSONModel(details), "details");
      }.bind(this));
      //End---------------Experience Model---------------

      //Begin-------------Certifications Model---------------
      var oCertifications = new JSONModel("model/certifications.json");
      this.setModel(oCertifications, "Certifications");
      //End---------------Certifications Model---------------

      var i18nModel = new ResourceModel({
        bundleName: "SapDevPortfolio.i18n.i18n"
      });
      this.setModel(i18nModel, "i18n");
    },
    
  });
});