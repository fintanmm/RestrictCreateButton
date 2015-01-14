// Hide the site create button in the site dashlet

function main() {
    var siteCreateGroup = "ALFRESCO_SITE_CREATORS";
    createSite = false

    var result = remote.call("/api/people/" + stringUtils.urlEncode(user.name) + "?groups=true");
    if (result.status == 200) {
        var i;

        // Create javascript objects from the server response
        // This is the User and it also contains all groups.
        var userValue = eval('(' + result + ')');

        if (userValue.groups.length != 0) {

            for (i = 0; i < userValue.groups.length; i++) {
                if (user.isAdmin) createSite = true; break;
                // if (userValue.groups[i].itemName == siteCreateGroup) createSite = true;
            }
        }
    }
    model.showCreateSite = createSite;
}

main();
