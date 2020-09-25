//zmienne
var iloscOsobProjekt = 1;
var iloscZadan = 1;
var leftValue = 20;
var leftWskaznik = 12;

//położenie wskaźnika ścieżki
document.getElementById('sciezki').onchange = pozycjaSciezki;

//funkcje
function dodajOsobe(){
    var osoba = document.getElementById('osoba').value;
    var lista = document.getElementById('listaOsob');
    var opcja = document.createElement('option');

    if (osoba != ""){
        iloscOsobProjekt += 1;
        opcja.text = osoba;
        opcja.value = iloscOsobProjekt;
        lista.appendChild(opcja);
    }else{
        alert("Proszę podać imię i nazwisko osoby, która ma być dodana do listy.");
    }
    
    return(iloscOsobProjekt);
}
function dodajZadanie(){
    //sprawdzenie pozycji scieżki
    var sciezka = document.getElementById('sciezki').value;
    //sprawdzenie, czy zadania zmieszczą się na kanwie
    if (iloscZadan>5){
        alert('Więcej zadań nie zmieści się na kanwie')
    }
    else{
        var kanwaZadan = document.getElementById('kanwaZadan');
        var zadanie = document.getElementById('zadanie').value;
        var start = document.getElementById('wskaznikStartu');
        var iloscDni = document.getElementById('czas').value;
        var topValue = 20;
        var dlugoscCegielki = 140;
    
        //liczenie pozycji wskaźnika startu
        if (sciezka > 1){
            topValue = 20 + (sciezka -1) * 80;
        };

        //liczenie długości cegiełki
        dlugoscCegielki = iloscDni * dlugoscCegielki;

        //zabezpieczenie przed umieszczaniem cegiełek poza kanwą
        if (dlugoscCegielki + leftWskaznik > 720){
            alert("Więcej zadań nie zmieści się na kanwie");
        }
        else{
            //usuwanie kanwy zadań
            start.remove();
            console.log('przed obliczeniami',leftValue, leftWskaznik);
            
            //doklejanie kodu HTML kolejnych cegiełek zadań
            zadanie = zadanie.replace(/ /g, "&nbsp");
            kanwaZadan.innerHTML += `<div id="cegielka" style="top: ${topValue}px; left: ${leftValue}px; width: ${dlugoscCegielki}px;"><p style="text-align: center;">${zadanie}</p></div>`;
            
            //liczenie pozycji startowej kolejnej cegiełki
            leftValue += dlugoscCegielki;

            //liczenie pozycji wskaźnika
            leftWskaznik = leftValue - 6;
            //operacje na wskaźniku startu
            kanwaZadan.innerHTML += `<div id="wskaznikStartu" style="left:${leftWskaznik}px;"></div>`;

            console.log(leftValue, leftWskaznik);
            return(leftValue, leftWskaznik);
        }
    }  
}
function pozycjaSciezki(){

    var sciezka = document.getElementById('sciezki').value;
    var kanwaZadan = document.getElementById('kanwaZadan');
    var wskaznikSciezki = document.getElementById('wskaznikSciezki');
    var topValue = 55;

    wskaznikSciezki.remove();

    //liczenie pozycji wskaźnika startu
    if (sciezka > 1){
        topValue = 55 + (sciezka -1) * 80;
    };

    //operacje na wskaźniku scieżki
    kanwaZadan.innerHTML += `<div id="wskaznikSciezki" style="top:${topValue}px;"></div>`;
}