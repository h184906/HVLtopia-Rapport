const løsningDiv = document.getElementById("løsning_div");
const resultatDiv = document.getElementById("resultat_div");
const resultat_box = document.getElementById("løsning_resultat_utskrift_box");

løsningDiv.addEventListener("click", function() {
    resultat_box.innerHTML = "";
    resultat_box.innerHTML = "<h2>Løsning</h2> <h3>Transport</h3><p>Nye transport muligheter som hyperloopen, dronereisen og undervannstunellen</p><h3>Energibruk</h3><p>Nye måter å bruke å få energi har gjort bergen mer miljøvennlig og mer bærekraftig</p>";
});

resultatDiv.addEventListener("click", function() {
    console.log("hei?")
    resultat_box.innerHTML = "";
    resultat_box.innerHTML = "<h2>Resulat</h2><h3>Mer bærekraftig</h3><p>Med en bedre fokus på energi bruk og produksjonen har Bergen blitt mer bærekraftig</p><h3>Effektivitet og inovasjon</h3><p>Med de nye dronereisene, hyperloopen og undervannstunellene har det blitt raskere, mer effektivt og bedre for miljøet å reise i sentrum</p>";
});
