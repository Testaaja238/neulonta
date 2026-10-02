// Javascript joka palauttaa selaimen konsoliin (F12) tekstin ja neulottujen villapaitojen määrän
const lankakera = "Neulonta on kivaa!"; 
let villapaidat = 100; 
console.log("Hei sinä!", lankakera); 
console.log("Olen neulonut villapaitoja:", villapaidat);

// Javascript joka palauttaa selaimen konsoliin (F12) tekstin villasukkien määrästä riippuen if-else -ehtolausekkeella
let villasukat = 39
if (villasukat >=39) {
    console.log("Olet mestari neuolomaan!");
} else {
    console.log("Kannattaa harjoitella lisää.");
}


// Javascript joka laskee/kertoo selaimen konsoliin (F12) neulottujen kaulahuivien määrän laskurifunktionilla
function laskeHuovienmaara(huivimaara){
let huivitTuplana = huivimaara *2;
return huivitTuplana;
}
console.log("Huivien määrä kun neulot niitä kaksinkertaisen määrän:", laskeHuovienmaara(5)); //pitäisi tulla 10


// Javascript jonka taulukossa on arvoja ja jotka palautetaan listana selaimen konsoliin (F12) 
const neulonnat = [
    "Villapaita",
    "Villasukka",
    "Villahuivi"
];
for (
    let i = 0;
    i <neulonnat.length;
    i++
)
{
    console.log("Olet neulonut:", neulonnat[i]);
}

/*
// Painike "villasukka.html-sivulla" ja joka tulostaa konsoliin mietelauseen 
fetch("https://api.adviceslip.com/advice") 
.then(response => response.json()) 
.then(data => { 
console.log("Saatu miete:", data); 
}); 
*/

// Painike "villasukka.html-sivulla" ja joka tulostaa konsoliin ja selaimeen mietelauseen sekä lataustila -tekstin
const haeNappi = document.getElementById("haeNappi"); 
const tulosTeksti = document.getElementById("tulosTeksti"); 
 
haeNappi.addEventListener("click", () => { // Painiketta klikkaamalla käynnistyy JavaScript
    tulosTeksti.innerText = "Haetaan mietelausetta..."; // Selaimessa näkyvä latausteksti, kun tietoa haetaan rajapinnasta
 
    fetch("https://api.adviceslip.com/advice", { cache: "no-cache" }) // Hakee tietoa rajapinnasta
        .then(response => response.json())                     // Vastaanottaa tiedon rajapinnasta
        .then(data => { 
            console.log("Saatu miete:", data); 
            tulosTeksti.innerText = data.slip.advice;   // Tulostaa mietelauseen html-sivulle
        }) 
        .catch(error => { 
            console.error("Virhe haussa:", error); 
            tulosTeksti.innerText = "Tiedon hakeminen epäonnistui!"; // Jos tiedonhaku epäonnistuu, tulostuu tämä html-sivulle
        }); 
}); 


// Hakee mietteitä niin monta, mitä käyttäjä on määrittänyt pudotusvalikosta ja palauttaa ne selaimeen, HUOM! Hakee vain yhtä ja samaa
// Koodi on pyydetty Copilotilta
const button = document.getElementById("adviceButton");
const adviceList = document.getElementById("adviceList");
const adviceCount = document.getElementById("adviceCount");

    button.addEventListener("click", async function () {
        const count = Number(adviceCount.value);
        adviceList.innerHTML = "<li>Haetaan mietteitä...</li>";
            try {
            adviceList.innerHTML = "";
            for (let i = 0; i < count; i++) {
            const response = await fetch("https://api.adviceslip.com/advice");
            if (!response.ok) {
            throw new Error("Haku epäonnistui");
            }
        const data = await response.json();
        const li = document.createElement("li");
        li.innerText = data.slip.advice;
        adviceList.appendChild(li);
        }
        } catch (error) {
        adviceList.innerHTML = "<li>Virhe haettaessa mietteitä.</li>";
        console.error(error);
}
});


