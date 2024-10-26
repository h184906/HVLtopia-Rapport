// for 
const løsning_Knapp = document.getElementById("løsning_div");
const resultat_Knapp = document.getElementById("resultat_div");
const resultat_box = document.querySelector(".løsning_resultat_utskrift_box");

løsning_Knapp.addEventListener("click", function() {
    resultat_box.innerHTML = "";
    resultat_box.innerHTML = "<h2>Løsning</h2><h3>Transport</h3><p>Innovative transportløsninger som hyperloop, dronereiser og undervannstunneler gjør reiser både raskere og mer miljøvennlige. Disse løsningene reduserer utslipp og bidrar til mindre trafikkbelastning i byområdene.</p><h3>Energibruk</h3><p>Bergen har tatt i bruk nye energikilder som sol-, vind-, og bølgekraft for å redusere karbonavtrykket. Smarte energisystemer sørger for optimal bruk og lagring av energi, noe som gjør byen grønnere og mer bærekraftig.</p>";
});

resultat_Knapp.addEventListener("click", function() {
    console.log("hei?")
    resultat_box.innerHTML = "";
    resultat_box.innerHTML = "<h2>Resultat</h2><h3>Mer bærekraftig</h3><p>Takket være effektiv energibruk og ren energiproduksjon har Bergen redusert sine utslipp og skapt et sunnere miljø for både innbyggere og besøkende.</p><h3>Effektivitet og Innovasjon</h3><p>Med hyperloop, dronereiser og undervannstunneler har Bergen oppnådd raskere, mer effektive og bærekraftige reiser i sentrum, samtidig som den teknologiske innovasjonen øker livskvaliteten og tiltrekker seg internasjonal oppmerksomhet.</p>";
});




