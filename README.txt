To get the Offline website working

Required: 
IISExpress 64-bit
Browser of choice (preferred Firefox)
SQLite Runtime components and dependencies: Setups for 64-bit Windows (.NET Framework 4.5) DL from their site
-> sqlite-netFx45-setup-bundle-x64-2012-1.0.106.0.exe (11.20 MiB) (sha1: 32154b539b7522efe22f6f7b8891b9e8bc265e97) 

1) In text editor of choice, recommended: Notepad++
Edit both files (Edit with Notepad++):
1 a) Open Web.config
1 b) Closed Web.config

2) For both files (Web.config) change Line4's DataRoot value
** Line4 = <add key="DataRoot" value="C:/Users/User/Downloads/BoutiqueCasseeStore/BoutiqueCasseeData/"/>
to the location that the BoutiqueCasseeData folder is located in and *inclusive*.
e.g. "C:/Users/User/Downloads/BoutiqueCasseeStore/BoutiqueCasseeData/"/>

3) Open files located in Closed & Open folders:
3 a) _Service_IISExpress_x64_8189 Closed.bat
3 b) _Service_IISExpress_x64_8188 Open.bat


4) Open browser with the url:
http://localhost:8189/BoutiqueCasseeStore.html
or
Double-click on 'BoutiqueCasseeStore URL' shortcut