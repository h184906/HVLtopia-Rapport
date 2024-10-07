const løsningDiv = document.getElementById("løsning_div");
const resultatDiv = document.getElementById("resultat_div");
const resultBox = document.getElementById("løsning_resultat_utskrift_box");

løsningDiv.addEventListener("click", function() {
    resultBox.innerHTML = "";
    resultBox.innerHTML = "<h2>Løsning</h2> <p>Løsningen vår er...</p>";
});

resultatDiv.addEventListener("click", function() {
    console.log("hei?")
    resultBox.innerHTML = "";
    resultBox.innerHTML = "<h2>Resulat</h2><p>Resultatet vårt er....</p>";
});
