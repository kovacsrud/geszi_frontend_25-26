# Javascript ismeretek

HTML,CSS - leíró nyelvek, a dokumentum szerkezetének, valamint a formázásának leírására használják.

A Javascript egy script nyelv, amely a böngészőkben (és szerver oldalon is) képes futni. Mivel script nyelv, sorról sorra kerülnek az végrehajtásra az utasításai. 
Felhasználási köre rendkívül széles. Alapvetően azért jött létre, hogy bizonyos feladatokat a felhasználói oldalon el lehessen végezni (pl. beviteli mezők ellenőrzése, interaktivitás biztosítása). 

Számos framework (keretrendszer) alapját is képezi , JQuery, Angular JS, Vue JS, Bootstrap...

A Javascript kód helyet kaphat a weboldalon belül a <SCRIPT></SCRIPT> tageken belül, illetve külön fájlokban is.

## Egy alap html oldal forrása:
```HTML
<HTML>
    <HEAD>
        <title>
            Javascript alapok
        </title>
       
    </HEAD>
    <BODY>
        <H1>JS alapok</H1>
       
    </BODY>
</HTML>
```

## A script-tagek elhelyezése a weboldalba
```HTML
<HTML>
    <HEAD>
        <title>
            Javascript alapok
        </title>
       <script>
           document.write("Hell-o");
        </script>
    </HEAD>
    <BODY>
        <H1>JS alapok</H1>
       <script>
           document.write("<H2>Hell-ooo</H2>");
        </script>
    </BODY>
</HTML>
```
## Írás a konzolba js programmal
A Javascript program tud a konzolba is írni, ha arra van szükségünk (hasznos lehet hibakereséskor, vagy változók értékének a követésekor).
```javascript
console.log("Hell-o again");
```
## Változók a JS programban

A js-ben nagyjából ugyanazok a változó típusok használhatóak, mint bármilyen más programban. A változókat a VAR kulcsszó használatával tudjuk létrehozni.
A változó típusok:
 - számok (egész vagy törtszámok, a számrendszer lehet decimális,oktális,hexadecimális)
 - szöveg (literál, vagy objektum)
 - logikai (TRUE,FALSE)
 - felsorolási típus 

### Szám típusok
```javascript
var a=119;
var b=67.89;
```
### Szöveg típus
Két szöveget a + műveleti jellel össze tudunk fűzni.
```javascript
 var szoveg='Valami szöveg';
 var sz2=' és még valami..'
           
 document.writeln(szoveg+sz2);
```           
### Logikai típus
```javascript
var igazsag=true;
```
### Undefined
Ha egy változót deklarálunk, de nem adunk neki értéket, akkor a változó értékére hivatkozva **undefined** szöveget kapunk.

```javascript
var nev;
```
A **nev** változó értékére hivatkozva **undefined**-et kapnánk.


### Tömbök JS-ben
A tömb alaphelyzetben ugyanúgy működik, mint minden más programozási nyelvben, a tömb elemére az indexével tudunk hivatkozni.
A tömb elemeinek a megjelenítésére a for ciklust használjuk ugyanúgy, mint C#-ban. A tömb elemeinek kezdőértékét a [] zárójelek között adhajtuk meg.
```javascript
<HTML>
    <HEAD>
        <TITLE>Javascript alapok 2
        </TITLE>
        <SCRIPT>
            var szamok=[1,26,78,43,39,51];
            for(i=0;i<szamok.length;i++) {
                document.write(szamok[i]+" ");
            }
            
        </SCRIPT>
    </HEAD>
    <BODY>
        
        
    </BODY>
</HTML>
```
### Nevek megjelenítése listaként,az UL és LI HTML tagek felhasználásával
```javascript
    var nevek=["Ubul","Huba","Zénó","Elek"];
   
   document.write("<UL>")
   
    for(i=0;i<nevek.length;i++){
                document.write("<LI>"+nevek[i]+"</LI>");            
    }
   
   document.write("</UL>")
```
## ALERT és PROMPT
Az ALERT funkció segítségével szöveges üzenetet tartalmazó ablakot nyithatunk  a böngészőben.

A PROMPT funkció segítségével felhasználói adatot kérhetünk be, amelyet egy változóban eltárolhatunk, később az értékét felhasználhatjuk.

```HTML
<html>
    <head>
        <title>Prompt, alert, függvények</title>
    </head>
    <body>
        <script>
            var nev=prompt("Add meg a nevedet!:");
            alert("A megadott név: "+nev);
            document.write("<H1>Szia "+nev+"</H1>");
        </script>
    </body>

</html>
```

###Számok bekérése prompt-al, konverzió

Ha szám típusú értékeket akarunk bekérni, akkor a művelet elvégzése előtt a számokat a parseInt, vagy a parseFloat függvényekkel
számmá kell alakítani, ellenkező esetben a program összefűzi őket mint string típusú adatokat;

```HTML
 <script>
     var a=prompt("Adj meg egy számot:");
     var b=prompt("Adj meg egy másik számot:");
          
     document.write("<P>"+(parseInt(a)+parseInt(b))+"</P>"); 
            
 </script>
```
## Függvények a JavaScript-ben

Más programnyelvekhez hasonlóan, a JS-ben is használhatunk függvényeket. A függvények lehetnek visszatérési érték nélküliek, vagy visszatérési értékkel rendelkezőek. A visszatérési értékkel rendelkező függvényekben szerepelnie kell a return utasításnak.

```html
<script>
      var a=prompt("Adj meg egy számot:");
      var b=prompt("Adj meg egy másik számot:");
            
      function osszead(a,b)
      {
          return parseInt(a)+parseInt(b);
      }
            
var osszeg=osszead(a,b);
    document.write("<P>"+osszeg+"</P>"); 
</script>
```
A legegyszerűbb függvény így néz ki JS-ben

```html
<script>
    
    function osszead(){
        document.write(10+20);    
    }
    osszead();
</script>
```
Ne feledjük a függvényt nem elég deklarálni, meg is kell hívni, hogy végrehajtódjon (**osszead()**)
Azok a függvények, amelyek rendelkeznek visszatérési értékkel (van benne return) azok állhatnak értékadó kifejezés jobb oldalán. 

Egyszerű példa: km/h-ban megadott sebesség átalakítása m/s-ra. Készítünk egy egyszerű függvényt, amely a paraméterben megadott km/h értéket átszámítja m/s-ra és ezzel visszatér. Az egyszerűség kedvéért az adatbekérést a **prompt**, a kiírást az **alert** funkciókkal valósítjuk meg.

```html
<HTML>
    <HEAD>
        <TITLE>Függvények, függvények mindenütt!
        </TITLE>
        
    </HEAD>
    <BODY>
        <H1>Sebesség átszámítás</H1>
        <SCRIPT>
            function kmh2ms(kmh)
            {
                return kmh/3.6;
            }
            var sebkmh=prompt("A sebesség km/h-ban:");
            alert("A sebesség: "+kmh2ms(sebkmh)+  "m/s");
            
        </SCRIPT>
    </BODY>
</HTML>
```
A JavaScript lehetőséget ad arra is, hogy általános függvényeket írjunk, mint pl. az átlag. Ha általános függvényt írunk, akkor nincs paraméterlista. A paramétereket híváskor ,-vel elválasztva adjuk át a függvénynek. Ebben az esetben az **arguments** tömb tartalmazza az átadott paramétereket innen lehet az értéküket kiolvasni. 

Erre példa a következő:

```HTML
<HTML>
    <HEAD>
        <TITLE>Függvények, függvények mindenütt!
        </TITLE>
        
    </HEAD>
    <BODY>
        <H1>Általános függvények</H1>
        <SCRIPT>
            
                        
            function atlag()
            {
                var osszeg=0;
                for(i=0;i<arguments.length;i++){
                    osszeg=osszeg+arguments[i];
                }
                return osszeg/arguments.length;
            }
            
            document.writeln(atlag(10,20,30));
            document.writeln(atlag(20,40));
            document.writeln(atlag(40,58,79,86,113,221));
            
        </SCRIPT>
    </BODY>
</HTML>
```
# A DOM (Document Object Model)
(2020.04.06)

A DOM egy nyelv és platformfüggetlen objektummodell, amely többek között a HTML, XHTML, XML és velük rokon nyelvek szerkezetét, és az objektumaikkal kapcsolatos műveleteket, interakciókat modellezi. A DOM egymással szülő-gyerek kapcsolatban álló objektumok rendszere. A dokumentum valamennyi összetevőjét, valamint tartalmát magában foglalja.

## Nézzünk egy egyszerű weboldalt

```html
<html>
	<head>
	        <title>
	            Document Object Model(DOM)
	        </title>
	    </head>
	    <body>
	        <H1>Document Object Model</H1>
	        <P id="bekezdes">Bekezdés</P>
	        <UL>
	            <LI>1</LI>
	            <LI>2</LI>
	            <LI>3</LI>
	            <LI>4</LI>
	            <LI>5</LI>
	        </UL>
	        	    
	    </body>
	
</html>
```
Belátható, hogy ha ez a fájl mondjuk ***lista.html*** néven van valahol elmentve fájlként, akkor ezt a fájlt felfoghatjuk a **document**-nek. A **\<HTML>..\</HTML>** elem szülő lesz, hiszen az összes többi elemet ez tartalmazza. 
A **\<HEAD>..\</HEAD>** elem egyrészt gyerek elem lesz, hiszen ez  a **\<HTML>** elem gyereke, viszont a **\<TITLE>** szempontjából szülő elem. A **\<BODY>** elem a **\<HTML>** elem gyereke, viszont pl. szülője a **\<H1>** elemnek.

Az egyes elemeknek lehetnek tulajdonságaik, más néven attribútumaik. Ismerjük az **\<IMG>** elemet, amely kép beszúrására szolgál. 
Például:
```HTML
<IMG SRC="light.jpg">
```
Az **SRC** az **\<IMG>** elem paramétere, és megadja a megjelenítendő kép elérési útját.

A JavaScript nyelv segítségével ezt a DOM modellt manipulálhatjuk. Lekérdezhetünk elemeket, megváltoztathatjuk a paramétereiket, tartalmukat. Hozzáadhatunk új elemeket, törölhetünk elemeket.

## Elemek elérése

Alapvetően három módon érhetünk el elemeket:
 - id alapján a **document.getElementById(id)** utasítással.
 - Az elem neve alapján a **document.getElementsByTagName(nev)**
 - Stílusa alapján a **document.getElementsByClassName(class)**; 

Az elemekről megállapíthatóak hogy mely elemeknek a szülöi, gyermekei, vannak-e gyerek elemeik stb.

 - **element.childNodes** az elem gyerek elemeit adja vissza egy tömbben
 - **element.firstChild** az első gyerek elemet adja vissza
 - **element.lastChild** az utolsó gyerek elemet adja vissza
 - **element.hasChildNodes** logikai értéket ad vissza, ha van gyereke az elemnek, akkor TRUE
 - **element.nextSibling** a következő elem ugyanazon a szinten, pl. a következő listaelem
 - **element.previousSibling** az előző elem ugyanazon a szinten
 - **element.parentNode** a szülő elemet adja vissza
 
 
## Elemek elérése, módosítása

Először nézzük az elérést id alapján. A HTML szabályai szerint az id egy egyedi azonosító, és nincs a dokumentumban két egyforma id, ezért az id mindig ***egy*** adott elemet jelent. A példában van egy \<P> elem (ami egy szöveges bekezdés), ehhez tartozik egy id, aminek értéke **"bekezdes"**.

### Készítsünk egy scriptet, ami eléri és módosítja ennek a bekezdésnek a tartalmát:

```HTML
<SCRIPT>
	var szoveg=document.getElementById("bekezdes");	            
	szoveg.innerHTML="DOM";
</SCRIPT>
```
Látható, hogy az elem a **szoveg** nevű változóba kerül, majd az **innerHTML** tulajdonság értékét módosítjuk (azaz a kiválasztott elem tartalmát).

### Elérés az elem neve alapján

Nézzük meg, hogy a Címsor1 elem tartalmát hogyan lehetne elérni. Itt nincsen Id, tehát Id alapján nem tudjuk elérni, csak az elem neve (**H1**) alapján. Az előző példát folytatva: 

```HTML
<<SCRIPT>
	var szoveg=document.getElementById("bekezdes");	            
	szoveg.innerHTML="DOM";
	
	var cimsor=document.getElementsByTagName("H1");
	cimsor[0].innerHTML="DOM";	
</SCRIPT>
```
Itt eredményként egy tömböt kapunk vissza. A **cimsor** nevű változó tehát most egy olyan tömb amelynek 1 eleme van. 

Mi a helyzet, ha több elem van? Nézzük a lista elemeit. Ezek most számok 1-től 5-ig. Szorozzuk meg a lista elemeit 2-vel!

```HTML
<<SCRIPT>
        var szoveg=document.getElementById("bekezdes");             
        szoveg.innerHTML="DOM";        

        var cimsor=document.getElementsByTagName("H1");
        cimsor[0].innerHTML="DOM";      

	 var elemek=document.getElementsByTagName("LI");

	 for(i=0;i<elemek.length;i++){
	         elemek[i].innerHTML=parseInt(elemek[i].innerHTML)*2;               
	 }


</SCRIPT>
```
Itt is egy tömböt kapunk az elemek változóban. Ezen kell végig menni a for ciklussal. Az elemeket számként értelmezzük a parseInt paranccsal, így a művelet a kívánt eredményt fogja adni.

## Elemek létrehozása,törlése

Bármikor tudunk a Javascriptben új elemeket létrehozni, erre a **document.createElement()**  parancs szolgál. A zárójelek közé azt az elemet kell beírnunk, amilyet létre akarunk hozni.
Például: 
```js
var bekezdes=document.createElement("p");
```
A fenti parancs egy bekezdést **\<P>..\</P>** fog létrehozni.
Az új elemnek adhatunk valami tartalmat, mondjuk egy szöveget:
```js
bekezdes.innerHTML="Ez egy bekezdés";
```
Az elem egyenlőre nem jelenik meg a weboldalban, hiszen nincs hozzárendelve egyenlőre a weboldal egyik eleméhez sem. 

Tegyük fel, hogy a weboldalban létezik a következő elem:
```html
<DIV id=szovegek>
</DIV>
```
Ezt az elemet el tudjuk érni, és hozzá tudjuk adni az előbb létrehozott elemet:
```js
var szovegek=document.getElementById("szovegek");
szovegek.appentChild(bekezdes);
```
A **\<DIV>** elem most így néz ki:

```html
<DIV id=szovegek>
	<P>Ez egy bekezdés</P>
</DIV>
```

Látható, hogy a \<P> a \<DIV> gyerek eleme. A \<P> szempontjából a \<DIV> szülő elem.

Ha el akarjuk távolítani az előbb hozzáadott elemet akkor az a következő módon lehetséges:
```js
szovegek.removeChild(bekezdes);
```

### Példa

Adott egy HTML fájl részlete:

```html
<DIV id=adatok>
	<P id=elso>Első adat</P>
	<P id=masodik>Második adat</P>
</DIV>	
```
Adjunk hozzá egy harmadik bekezdést, majd töröljük az elsőt!

A \<script>..\</script> tag-be a következő utasítások kerülnének:

```js
var adatok=document.getElementById("adatok");
var elso=document.getElementById("elso");
var harmadik=document.createElement("p");
harmadik.innerHTML="Harmadik bekezdés";
adatok.removeChild(elso);
adatok.appendChild(harmadik);
```
**Az eredmény:**

```HTML
<DIV id=adatok>
        <P id=masodik>Második adat</P>
	<P>Harmadik bekezdés</P>
</DIV>  
```
## Az elemek paraméterei (attribútumai). Elérésük, módosításuk

A HTML elemek számos paramétert tartalmazhatnak, melyek elérhetőek manipulálhatóak Javascript-ből is természetesen.

Nézzük a következő HTML dokumentumot:
```HTML
<HTML>
    <HEAD>
        <meta lang="hu" charset="utf-8">
        <TITLE>Attribútumok
        </TITLE>
       
    </HEAD>
    <BODY>
    <H1 id="nev">Attribútumok</H1>
	    
        <img id="kep" src="tesztkerdesek.png" width="120" height="120">         
	    
	    
        <script>
        </script
    </BODY>
</HTML>

```
A \<H1> elemben egyetlen paramétert láthatunk, aminek a neve **id**, az értéke(**value**) ***nev***

A címsor 1 alatt egy kép van beszúrva, ennél az elemnél 4db paramétert számolhatunk össze, ezek: **id,src,width,height**

**Hogyan lehet ezeket az attribútumokat JS programból elérni, módosítani?**

A \<SCRIPT> elembe a következőket írjuk:

```js
var kep=document.getElementById("kep");    
```
Ezzel a kep változóba került a kep id-val megjelölt elem bekerül.

Hogyan tudjuk megmondani, hogy hány db attribútuma van az elemnek?

```js
var attribs=document.getElementById("kep").attributes.length;
Console.log(attribs);
```
A konzolt megnyitva láthatjuk, hogy az érték 4

**Hogyan tudjuk elérni az egyes attribútumokat?**

Az attribútumokat a megadás sorrendjáben lehet elérni, a számozás természetesen 0-val indul. 
Írassuk konzolra az első elem nevét, és értékét!

```js
console.log(kep.attributes[0].name);
console.log(kep.attributes[0].value);
```
Az attribútumok elérhetőek közvetlenebb módon is (a nevük alapján).

```js
console.log(kep.src);
```

Az attribútumok értéke módosítható is

```js
kep.width=240;
kep.heidht=240;
```
Az attribútumok manipulálásával sok mindent lehet kezdeni. Kicserélhetjük a képet, megváltoztathatjuk a szélességét, magasságát, egy elem stílusát megváltoztathatjuk, stb.

## Mintafeladat elemek elérésére, attribútumok módosítására

A feladathoz való képek : [kapcsolo_be](kapcsolo_be.png), [kapcsolo_ki](kapcsolo_ki.png), [izzo_be](bulb_on.png), [izzo_ki](bulb_off.png)

A korábbi alkalommal is láttunk példát HTML elemek elérésére és módosítására. Nem csak az elem tartalma, hanem az elem paraméterei is elérhetőek, módosíthatóak.

Ebben a feladatban 4 db képfájl segítségével kell megvalósítani egy olyan weboldalt, ahol egy kapcsoló segítégével tudunk egy égőt ki és bekapcsolni.

Az egyes állapotok megjelenítésére képfájlokat használunk (kapcsolo_be.png,kapcsolo_ki.png,bulb_on.png,bulb_off.png)

A feladatot egy JavaScript függvény segítségével fogjuk megoldani.

Először a html fájlt kell elkészíteni a neve legyen **lampa.html**. Egy táblázatba kerül a két kép, egymás alá, középre igazítva.

Tartalma a következő legyen:

```HTML
<HTML>

<head>
    <title>
        Light feladat
    </title>
</head>

<Body>
    <table align=center>
        <tr>
            <td align=center><img id="bulb" src="bulb_off.png"></td>
        </tr>
        <tr>
            <td align=center>
                <img id="kapcsolo" src="kapcsolo_ki.png" >
            </td>
        </tr>

    </table>
       
        
    
</Body>

</HTML>
```

A **</TABLE>** alá kerüljön a <SCRIPT></SCRIPT> elem, ebbe kerül a JS függvény.

```HTML
<SCRIPT>
    function kapcsol(){
    
    
    }

</SCRIPT>    
```

Minden további utasítás a függvényen belülre kell hogy kerüljön!

Először meg kell szereznünk azt az információt, hogy jelenleg melyik kép van betöltve. Az egyes képekhez id van rendelve, az égő képét tartalmazó <IMG> elemnél "bulb", a kapcsolónál pedig "kapcsolo" az id értéke.
    
A **bulb** változóba beolvassuk a "bulb azonosítójú elemet".

```Javascript
var bulb=document.getElementById("bulb");
```
A **kapcsolo** változóba pedig a "kapcsolo" azonosítójú elemet.

```Javascript
var kapcsolo=document.getElementById("kapcsolo");
```
Ezeknél a változókon belül az src tartalmazza a kép elérési útvonalát (pl. bulb.src). Ügyelni kell arra, hogy annak ellenére, hogy a weboldalban realtív megadással van megadva a kép elérési útja, a változóban teljes elérési utat kapunk, meghajtóval, mappanevekkel, viszont nekünk csak a fájlnév kell.

Mi a megoldás? Kezeket fel!

Igen, a "/" karakterek mentén felvágjuk az elérési utat, ennek eredménye egy tömb, és csak az utolsó elemet használjuk majd fel összehasonlításra. Ezeket eltároljuk külön változókba:

```javascript
var bulb_src=bulb.src.split("/");
bulb_src=bulb_src[bulb_src.length-1];

 var kapcsolo_src=kapcsolo.src.split("/");
 kapcsolo_src=kapcsolo_src[kapcsolo_src.length-1];

```

Már csak egy elágazásra van szükség a be ill. a kikapcsolt állapot megkülönböztetésére. Ha a kikapcsolt állapot az aktuális, akkor betöltjük a bekapcsolt állapotot jelentő képeket az égőhöz illetve a kapcsolóhoz, és fordítva (az egyes <IMG> elemek src paraméterét változtatjuk gyakorlatilag).

```javascript
 if(bulb_src=="bulb_off.png"){
            
     bulb.src="bulb_on.png";
     kapcsolo.src="kapcsolo_be.png";
           
} 
else {
            
      bulb.src="bulb_off.png";
      kapcsolo.src="kapcsolo_ki.png";
      
}
```

A függvény kész mást nem kell írni bele, azonban ahhoz hogy működjön a kapcsolót megjelenítő <IMG> elem onclick eseményéhez hozzá is kell rendelni az alábbi módon.
    
```HTML
<img id="kapcsolo" src="kapcsolo_ki.png" onclick="kapcsol()">
```

Készen is van.

## Mintafeladat elemek elérésére, létrehozására (2020.05.18.)

Ez a honlap egy minimalista stoppert fog megvalósítani.
A megjelenített idő az **óra:perc:másodperc** formában fog kinézni. 

Az infókat egy keretbe tesszük (\<DIV> tag), ezen belül egy-egy bekezdés lesz (\<P>), és a bekezdéseken belül \<SPAN> tagokkal biztosítjuk a karakterformázást. Minden elemhez id-t rendelünk, hogy a script-ből könnyen el lehessen érni őket.

Az előző feladatnál létrehozott stílusfájlt használjuk, nem muszáj újra elkészíteni, ha megvan.
Ha nincs meg, akkor létre kell hozni ***style.css***  néven. A tartalmát kiegészítjük néhány új dologgal, a **reszido** és a **gomb** id-k hoz rendelünk egy-egy stílust.

```css
#fokeret {
    margin: auto;
    width: 500px;
    font-size: 50;
    text-align: center;
    font-family: sans-serif;
    font-weight:bold;
    color: burlywood;
}

#reszido {
    margin: auto;
    width: 500px;
    font-size: 20;
    text-align: center;
    font-family: sans-serif;
    font-weight:bold;
    color: burlywood;
}

#gomb {
	margin:auto;
    text-align: center;
}

h1{
    text-align: center;
    color: brown;
}
```
A következő legyen az ***stopper.html*** fájl létrehozása:

```html
<HTML>

<HEAD>
    <TITLE>
        Stopper
    </TITLE>
    <link rel="stylesheet" href="style.css" type="text/css">
</HEAD>

<BODY>
<H1>Óra JavaScript-ben</H1>
    <DIV id="fokeret">
        
        <P>
            <SPAN id="ora">00</SPAN>
            <SPAN id="elvalaszto">:</SPAN>
            <SPAN id="perc">00</SPAN>
            <SPAN id="elvalaszto">:</SPAN>
            <SPAN id="masodperc">00</SPAN>

        </P>

    </DIV>
    <div id=gomb><input type="button" name="Részidő" value="Részidő" onclick=reszido()>
    <input type="button" name="Törlés" value="Törlés" onclick=reszido_torles()></div>
    <div id=reszido>
        
    </div>    
</BODY
</HTML>  
```
Látszik, hogy a \<HEAD> részben lévő \<LINK> utasítás betölti a stíluslapot. Az oldalban egyenlőre azok az idő értékek jelennek meg, amik kézzel be lettek írva, ennek pusztán csak annyi jelentősége van, hogy látjuk a stíluslap által alkalmazott formázásokat.

A **fokeret** id-vel jelzett \<DIV> tartalmazza az aktuális időt. A gombokat egy **gomb** id-vel ellátott \<DIV> jelzi. A részidők majd a **reszido** id-vel azonosított \<DIV>-be kerülnek.

Az is látszik, hogy a gombokhoz már hozzá vannak rendelve az egyes függvények az **onclick** eseményhez. Ügyelni kell arra, hogy a függvények neve ne stimmeljen, mert csak akkor működik majd!

A \</DIV> után hozzuk létre a \<SCRIPT></SCRIPT> tagot, minden ami ezután következik, ebbe kerüljön!

Három függvényt készítünk. Az első feladata az idő lekérdezése, és frissítése. A második függvény segítségével rögzítjük a részidőt, a harmadik függvény pedig a részidők törlését fogja elvégezni.

Az idő meghatározása nagyon hasonló, csak éppen 0 másodpercről nő az idő értéke, ha eléri a 60-at, akkor a másodpercet nullázzuk, a percet 1-el növeljük és így tovább. Ezt végzi el a **stopper()** függvény.

```javascript
 function stopper() {

            ora = document.getElementById("ora").innerHTML;
            perc = document.getElementById("perc").innerHTML;
            masodperc = document.getElementById("masodperc").innerHTML;

            ora = parseInt(ora);
            perc = parseInt(perc);
            masodperc = parseInt(masodperc);

            masodperc++

            if (masodperc > 59) {
                masodperc = 0;
                perc++;
            }

            if (ora < 10) {
                ora = "0" + ora;
            }
            document.getElementById("ora").innerHTML = ora;

            if (perc < 10) {
                perc = "0" + perc;
            }

            document.getElementById("perc").innerHTML = perc;

            if (masodperc < 10) {
                masodperc = "0" + masodperc;
            }

            document.getElementById("masodperc").innerHTML = masodperc;

        }
```

A következő feladat az aktuális időpont lekérdezése és új elembe helyezése. Itt bejönnek a képbe új dolgok.
Tanulták (tanítottam), hogy a HTML egy fa struktúrájú dokumentum. Az egyes elemeknek lehetnek szülő ill. gyerek elemeik is.
A weboldalban már van egy reszido azonosítójú <\DIV> elem, ami pillanatnyilag üres. Ehhez az elemhez bármikor adhatunk hozzá gyerek elemeket. A gyerek elem egy bekezdés lesz, amelyben az az idő szerepel majd, amikor lenyomtuk  **Részidő** feliratú gombot.
Létrehozunk egy függvénnyel új elemeket, majd ezt mint gyerek elemet hozzáadjuk a részidőhöz. Ezt valósítja meg a **reszido()** függvény. 
A **document.createElement()** paranccsal tudunk új elemet létrehozni, és az elemnév.appendChild() paranccsal egy elem gyerek elemeként hozzáadni.


```js
 function reszido() {
        var idodiv=document.getElementById("reszido");
        var reszido=document.createElement("p");
        var reszora=document.createElement("span");
        var reszperc=document.createElement("span");
        var reszms=document.createElement("span");      
	
        reszora.innerHTML=ora+":";
        reszperc.innerHTML=perc+":";
        reszms.innerHTML=masodperc;
        reszido.appendChild(reszora);
        reszido.appendChild(reszperc);
	reszido.appendChild(reszms);
	idodiv.appendChild(reszido);

}
```

### Részidők törlése

Ha törölni kívánjuk a tárolt részidőket, akkor a **reszido** \<DIV> gyerek elemeit kell eltávolítani. Lekérdezzük az elemet, meghatározzuk a benne lévő bekezdéseket \<P> , és azokat a **removeChild()** paranccsal töröljük. Vajon miért visszafelé halad a ciklus az elemeken?

például:

```js
 function reszido_torles()
        {
            var reszido=document.getElementById("reszido");
            var reszidok=reszido.getElementsByTagName("p");
            
            console.log("Elemek száma:"+reszidok.length);
            
            for (i=reszidok.length-1;i>=0;i--){
               
                reszido.removeChild(reszidok[i]);
                
            }
        }

```

Végül, indítsuk a stoppert:


```js
setInterval(stopper, 1000);
```
Kész is van.


# Form ellenőrzés (2020.05.25.)

Ez a weboldal egy egyszerű, regisztrációkban szokványos formot fog megvalósítani, amelynek a mezőit Javascript-el fogjuk leellenőrizni.

Az oldalhoz .css fájl is tartozik (regisztracio.css), amely beállít egy háttérképet [Innen letölthető](background.jpeg), illetve néhány elem stílusát. A weboldal fog tartalmazni táblázatot is, a táblázat háttérszíne részben átlátszó lesz (opacity:0.8).

```css
body {
    background-image: url(background.jpeg);
    color: aliceblue;
    background-size: 150%;
    background-repeat: no-repeat;
    background-position: center;
    font-family: sans-serif;
}

h1 {
    text-align: center;
    font-weight: bolder;
}

h2 {
    text-align: center;
    font-weight: bolder;
}

p {
   padding:80px;
}

table {
    margin: auto;
    padding: 10px;
    background-color: aliceblue;
    color: cornflowerblue;
    font-weight: bold;
    opacity: 0.8;
}

td {
    padding: 20px;
}
```
### Az alap weboldal a következő lesz:

```html
<html>

<head>
    <title>
        Form ellenőrzés
    </title>
    <meta lang="hu" charset="utf-8">
    <link rel=stylesheet type="text/css" href="regisztracio.css">

</head>

<body>
    <h1>Regisztráció</h1>
    <h2>Köszönjük érdeklődését!</h2>
    <p>Kérjük, hogy regisztráljon, így mindig rendelkezésére álljanak a legfrissebb információk, illetve, hogy személyre szabott ajánlatokat állíthassunk össze az Ön részére!</p>
    
    

    <script>
        
    </script>

</body>

</html>
```
A **Kérjük regisztráljon** szöveg alá jön a form:

```html
 <form name="regform" action="dummy" onSubmit="return ellenoriz()">
        <table>
            <tr>
                <td>Név:</td>
                <td><input type="text" name="nev"></td>
            </tr>
            <tr>
                <td>Életkor:</td>
                <td><input type="text" name="kor"></td>
            </tr>
            <tr>
                <td>Telefonszám:</td>
                <td><input type="text" name="telefon"></td>
            </tr>
            <tr>
                <td>E-mail cím:</td><td><input type="text" name="email"></td>
            </tr>
            <tr>
                <td>E-mail cím ismét:</td><td><input type="text" name="email_ismet"></td>
            </tr>
            <tr><td  colspan="2" align=center><input type="submit" name="go"></td></tr>
        </table>

    </form>
```
Látható, hogy az **action** mezőben nem szerepel semmilyen hivatkozás ami valamilyen feldolgozó programra mutatna. Ez azért van így, mert nem szeretnénk hibás adatokat küldeni, azért a feldolgozó programra való hivatkozást (ami most egy e-mail címre való elküldést fog jelenteni) csak akkor állítjuk be, ha a form minden mezője megfelelő adatokkal van kitöltve. Az **onSubmit** eseményhez van megadva az **ellenoriz()** függvény, **return ellenoriz()** formában. Ennek az eredménye egy logikai érték lesz.

### Ellenőrző függvények
A \<SCRIPT> tag ba kerüljenek a további JS kódok.

Az első ellenőrző függvény azt vizsgálja, hogy a paraméterben kapott mező üres-e vagy sem. Ha üres, akkor dob egy hibát.

```javascript
   function uresMezo(mezo) {
            var szoveg = mezo.value
            if (szoveg == "") {

                alert("A " + mezo.name + " mező nem lehet üres!")
                return false;
            } else {

                return true;
            }


        }
```

A következő függvény azt vizsgálja, hogy a paraméterben kapott adat megtalálható-e a szintén paraméterként kapott mintában:
```js
function tartalmaz(adat, minta) {
            for (var i = 0; i < adat.length; i++) {
                if (minta.indexOf(adat.charAt(i)) == -1) {
                    return false;
                }
            }

            return true;
        }
```

Bizonyos mezők (pl. életkor) csak számot tartalmazhatnak. Ennek ellenőrzését végzi el a következő függvény:

```js
function numerikusMezo(mezo) {
            if (!uresMezo(mezo)) return false;
            if (tartalmaz(mezo.value, "0123456789")) {
                return true;
            } else {
                alert("A " + mezo.name + " nevű mező csak számot tartalmazhat!")
                return false;
            }
        }
```
Az e-mail címek ellenőrzésekor meg kell nézni, hogy a két mező tartalma egyezik-e (megegyeznek-e a megadott e-mail címek)

```js
function egyezomezok(mezo1, mezo2) {
            
            if (!uresMezo(mezo1)) return false;
            if (!uresMezo(mezo2)) return false;
            
            if (mezo1.value == mezo2.value) {
                return true;
            } else {
                alert("A két e-mail cím nem egyezik meg!")
                return false;
            }
        }
```
Végül, az egyes függvényeket egy olyan függvényben használjuk, amely elvégzi a mezők ellenőrzését, ezt a függvény hajtódik végre az onSubmit eseménykor (azaz, amikor a formnál az **Elküldés** gombra kattintunk. Az egyes függvények az és logikai művelettel vannak összekapcsolva.

```js
function ellenoriz() {
            if (uresMezo(document.regform.nev) &&
                numerikusMezo(document.regform.kor) &&
                numerikusMezo(document.regform.telefon) &&
                emailEll(document.regform.email) &&
                emailEll(document.regform.email_ismet) &&
                egyezomezok(document.regform.email, document.regform.email_ismet)
            ) {

                document.regform.action = "mailto:" + document.regform.email.value;

                return true;


            } else {
                console.log("Error");
                return false;
            }
        }
```
A weboldal jelen megvalósításában a mezőkben megadott e-mail címre próbálja meg elküldeni a form adatait. Akkor működik jól ez a form, ha betöltődik az op rendszer alap levelező programja.
