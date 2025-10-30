sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/ui/core/HTML"
], function (Controller, JSONModel, HTML) {
  "use strict";

  return Controller.extend("SapDevPortfolio.controller.Certifications", {
    onInit: function () {
    //     var oModel = new sap.ui.model.json.JSONModel();
    //     oModel.loadData("model/badges.json");
    //     this.getView().setModel(oModel);

    //     oModel.attachRequestCompleted(function () {
    //     var aBadges = oModel.getProperty("/badges");
    //     var oContainer = this.getView().byId("badgeContainer");

    //     aBadges.forEach(function (badge) {
    //     var oHTML = new sap.ui.core.HTML({ content: badge.html });
    //     oContainer.addItem(oHTML);
    //     });
    // }.bind(this));
    },

    onPress : function(oEvent) {
        var oItem = oEvent.getSource();
        var oCtx = oItem.getBindingContext("Certifications");
        var oCertification = oCtx.getObject();
        var sUrl = oCertification.url;
        window.open(sUrl, "_blank");
    },

    onAfterRendering: function () {
        // var injectCredlyScript = function () {
        // if (!document.querySelector("script[src*='credly.com']")) {
        //     var script = document.createElement("script");
        //     script.src = "//cdn.credly.com/assets/utilities/embed.js";
        //     script.async = true;
        //     document.body.appendChild(script);
        //     }
        // };
        // var waitForCredly = function () {
        //     var attempts = 0;
        //     var maxAttempts = 50;

        //     var interval = setInterval(function () {
        //     if (window.CredlyBadge && typeof window.CredlyBadge.renderBadges === "function") {
        //         window.CredlyBadge.renderBadges();
        //         clearInterval(interval);
        //     } else if (++attempts >= maxAttempts) {
        //         console.warn("CredlyBadge not ready after polling.");
        //         clearInterval(interval);
        //     }
        //     }, 100);
        // };

        // injectCredlyScript();
        // waitForCredly();

    }
  });
});