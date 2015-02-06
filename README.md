# Disable the create site for everyone bar Alfresco Admin user

Suport Alfresco version 4.2.x

Currently it only checks to see if the user is admin.

The plan is to have a group that can be changed by editing siteCreateGroup.

Auto deploy is set to true.

Create a jar file
```
jar cf ../RestrictCreateButton.jar
```

Then deploy the file to shared/lib or to webapps/share/WEB-INF/lib folder. Restart tomcat.

References:
http://stackoverflow.com/questions/22531555/how-to-hide-create-site-link-for-particular-user

https://forums.alfresco.com/forum/end-user-discussions/alfresco-share/disable-create-site-link-42-community-01102013-1306

https://forums.alfresco.com/forum/end-user-discussions/alfresco-share/make-options-header-admin-only-alfresco-42d-09022013-1746
