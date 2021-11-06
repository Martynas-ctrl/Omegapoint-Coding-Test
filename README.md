# Omegapoint-Coding-Test
Code Test Fullstack Open Source For OmegaPoint

Backend(Python)

Programmet har endast testats med python 3.9.7 på Windows.

När alla dependencies är nedladdade startas servern via shell script

"sh start.sh". Funkar det inte så går det även att starta manuellt.

Förutsatt att du är i samma katalog som app.py och ngrok så gör du då på följande sätt:

"python app.py" -- för att starta en local server.

Kör sedan "ngrok http 5000" eller "./ngrok http 5000" i en annan terminal om du vill ha extern tillgång till apin.

requirements.txt

De bibliotek som använts av app.py.

För att ladda ner biblioteken kör kommandot "pip install -r requirements.txt".

App.py API applikationen. Applikationen är byggd i web-framworket flask.

Eftersom databasen är relativt liten lagras den i den globala variablen DATABASE som en List. 

Vid omstart av applikationen resettas även databasen till den som finns tillgänlig

på "https://kodtest.azurewebsites.net/api/products?code=MWZOJunmBNEPDGxldyIKSplsqq/8Sv4c6KvgZ1vyh4Z9wCaw6rqJIA==".

Ifall nedladnning av originaldatabasen återger en annan statuskod än 200, stängs applikationen.

Alla responser från APIn återvänds i Json format.

Applikationen har följande 4 routes som fungerar som API calls:

GET  	/all_products/
GET  	/get_product_by_id/?id=<product_id>
DELETE  /remove_product_by_id/?id=<product_id>
POST  	/add_product/

När add_product apin kallas behövs produktdata i korrekt Json format skickas med.

Nedan följande strukturen som behövs:
        {"id" : 99,
        "title" : "TITEL",
        "category" : "EXEMPEL",
        "description" : "DETTA E EN BESKRIVNING",
        "image" : "<url_till_bilden>",
        "rating" : { "count" : 10 , "rate" : 3.4 },
        "price" : 888
	}
  
Applikationen svarar med en 404 vid felaktiga argument eller data samt beskrivning av vad som var fel.

Som exempel återvänds en 404 med "error":f"No product with id {id}" när användaren försöker nå en produkt med icke existerande id.

ngrok.exe ett program som kallas av test.sh för att tunnla trafik till localhost så att APIn går att testa externt, tex på Postman.

start.sh ett kort shell skript som startar APIn som en bakgrundsprocess och startar ngrok för att tunnla trafik mellan localhost och utåt.

kör med "sh start.sh"

Frontend(React js)

Installera React om du inte redan har.

Sedan öppna Git Bash, Windows Command Prompt eller PowerShell i en tom folder och kopiera in följande länk för att klona mitt projekt:

https://github.com/Martynas-ctrl/Omegapoint-Coding-Test.git

Tryck enter och vänta tills det är klar.

Sedan mata in kommandot npm install för att ladda ner alla bibliotek som jag har använt till projektet.

För att starta React App öppna terminalen eller git bash i frontend src folder och tryck npm start.

Sedan i backend folder öppna Windows Command Prompt och mata in python app.py för att starta backend server.

Öppna en till Windows Command Prompt i samma backend folder och skriv in ./ngrok http 5000.

Om du följer instruktionerna så borde allting fungera.
