const spørsmål_box = document.querySelectorAll('.selve_spørsmål');

const svar_box = document.querySelectorAll('.ofte_stilte_spørsmål_svar');


for (let i = 0; i < spørsmål_box.length; i++) {
    spørsmål_box[i].onclick = function() {
        
        if ((svar_box[i].style.display == "none") || (svar_box[i].style.display == "")) {
            svar_box[i].style.display = "block";  
        } else {
            svar_box[i].style.display = "none";  
        }
    };
}
