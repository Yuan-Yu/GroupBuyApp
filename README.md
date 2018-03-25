# GroupBuyApp
A web app based on google app script for group buying.    
根據google script建立的團購網站

# Requirement (需求)
 - Google app script 
 - Google Firebase Realtime Database 

# Setup
 - Create a Firebase realtime database [here](https://console.firebase.google.com/)     
   建立一個Firebase realtime database [這裡](https://console.firebase.google.com/)
 - Click the gear next to the "Project Overview" >> project setting   
   點擊"Project Overview"旁的齒輪 >> 專案設定  
   ![setting](https://raw.githubusercontent.com/Yuan-Yu/GroupBuyApp/master/image/FireDBSeting.PNG?raw=true)  
 - Click service account >> database private key  >>  get the "firebaseID", "firebaseKey"  
   點擊服務帳戶 >> 資料庫秘鑰 >> 獲得 "firebaseID", "firebaseKey"
   ![privatekey](https://raw.githubusercontent.com/Yuan-Yu/GroupBuyApp/master/image/privatekey.PNG?raw=true)  
 - Clone the google app script project [here](https://script.google.com/d/1qr1JerP4FMWLoPUDt3aFT0pqpWA0-8Hvn0feltmziT1pQA7kbLEcgkqS/edit?usp=sharing)    
   建立本專案副本[這裡](https://script.google.com/d/1qr1JerP4FMWLoPUDt3aFT0pqpWA0-8Hvn0feltmziT1pQA7kbLEcgkqS/edit?usp=sharing)  
   ![](https://raw.githubusercontent.com/Yuan-Yu/GroupBuyApp/master/image/cloneProject.PNG?raw=true)  
 - Deploy this project once for the rootUrl. select deploy and deploy as web app.    
   必須部署本專案一次來獲得rootUrl. 點擊發佈 >> 部署為網路應用程式  
   ![](https://raw.githubusercontent.com/Yuan-Yu/GroupBuyApp/master/image/aswebapp.PNG?raw=true)  
 - Select "anonymous" at applictation access and click "deploy"   
   在具有應用程式存取權的使用者中,選取任何人甚至匿名使用者. 並點擊"部署"  
   ![](https://raw.githubusercontent.com/Yuan-Yu/GroupBuyApp/master/image/anonymous.PNG?raw=true)  
 - Now, we have the rootUrl.  
   獲得rootUrl  
   ![](https://raw.githubusercontent.com/Yuan-Yu/GroupBuyApp/master/image/roorURL.PNG?raw=true)
 - Change the following 3 parameters in "程式碼.gs" file : rootUrl, firebaseID, firebaseKey    
   修改在"程式碼.gs"檔案中的三個參數: rootUrl, firebaseID, firebaseKey  
   ![](https://raw.githubusercontent.com/Yuan-Yu/GroupBuyApp/master/image/inGS.PNG?raw=true)  
 - Deploy this project again!    
   重新部署本專案  
