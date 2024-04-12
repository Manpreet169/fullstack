

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("generate").addEventListener(`click`, function() {
        let ranNumero = Math.floor(Math.random() * 76) + 1;
        document.getElementById("risultato").innerText = `Genera Numero: ` + ranNumero;
    });
});