let colori = [];
// Questa parte di codice serve a mostrare una frase di saluto e la data odierna
let d = new Date();
console.log(d);
document.getElementById("saluto").innerHTML = "Oggi è il " + d.toLocaleString();
// Funzione che elabora quanto scritto dall'utente
function elabora() {
    let inputNum = document.getElementById("numero").value;
    let numero = Number(inputNum);
    let testo = document.getElementById("testo").value;
	// Inserisce il numero 
    if (inputNum !== "" && !isNaN(numero) && numero >= 0 && numero <= 255) {
        if (colori.length < 3) {
            colori.push(numero);
			console.log(colori)
           
            // Aggiorna il testo solo se l'utente ha scritto qualcosa
            if (testo !== "") {
                document.getElementById("testoColorato").innerHTML = testo;
            }
			//Inserisce il numero inserito e quelli inseriti prima
            document.getElementById("titolo").innerHTML = "Hai inserito il numero: " + numero;
            document.getElementById("titolo").innerHTML += "<br>I colori inseriti sono: " + colori.join(", ");
            document.getElementById("numero").value = "";
			// Quando i colori inseriti sono tre questi vengono applicati al testo
            if (colori.length === 3) {
				//rgb è una funzione che serve per i colori rgb
                let newColor = `rgb(${colori[0]}, ${colori[1]}, ${colori[2]})`;
                document.getElementById("testoColorato").style.color = newColor;
                document.getElementById("titolo").innerHTML += "<br>Colore finale : <b>" + newColor + "</b>";
				console.log(newColor);
            }
        } else {
			// Se si inserisce un colore in piùsi viene blocatti dal programma
            alert("Numero massimo di inserimenti raggiunto");
        }
    } else {
		// Controlla che il numero sia compreso fra 0 e 255
        alert("Il numero deve essere compreso tra 0 e 255");
		document.getElementById("errori").innerHTML += inputNum + ", " + "</b>";
		document.getElementById("numero").value = "";
    }
}

// Funzione per ripurile la pagina e riportarla al suo stato originale
function pulisci() {
    document.getElementById("numero").value = "";
    document.getElementById("testo").value = "";
    document.getElementById("titolo").innerHTML = "Numeri Inseriti";
    document.getElementById("testoColorato").innerHTML = "Testo Colorato";
    document.getElementById("testoColorato").style.color = "black";
    colori = [];
}