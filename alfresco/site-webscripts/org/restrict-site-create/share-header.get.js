// Find the "Sites" menu...
var sitesMenu = widgetUtils.findObject(model.jsonModel, "id", "HEADER_SITES_MENU");
if (sitesMenu != null) {
    // Hide the site finder...
    if (!user.isAdmin) {
        sitesMenu.config.showCreateSite = false;
    }
}
