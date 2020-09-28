//zmienne
var iloscOsobProjekt = 1;
var iloscZadan = 1;
var leftValue = 20;
var leftWskaznik = 12;


//położenie wskaźnika ścieżki
document.getElementById('sciezki').onchange = pozycjaSciezki;
//Tworzenie siatki
var kanwaZadan = document.getElementById('kanwaZadan');
kanwaZadan.innerHTML += "<div id='l_pozioma_1'></div><div id='l_pozioma_2'></div><div id='l_pozioma_3'></div><div id='l_pozioma_4'></div><div id='l_pionowa_1'></div><div id='l_pionowa_2'></div><div id='l_pionowa_3'></div><div id='l_pionowa_4'></div>"
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
function pozycjaWskaznika(event){
    leftWskaznik=event.pageX -20;
    //operacje na wskaźniku startu
    var start = document.getElementById('wskaznikStartu');
    start.remove();
    kanwaZadan.innerHTML += `<div id="wskaznikStartu" style="left:${leftWskaznik}px;"></div>`;
    return(leftWskaznik);
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

            //doklejanie kodu HTML kolejnych cegiełek zadań
            zadanie = zadanie.replace(/ /g, "&nbsp");
            leftValue = leftWskaznik + 6;
            kanwaZadan.innerHTML += `<div id="cegielka" style="top: ${topValue}px; left: ${leftValue}px; width: ${dlugoscCegielki}px;"><p style="text-align: center;">${zadanie}</p></div>`;
            
            //liczenie pozycji startowej kolejnej cegiełki
            leftValue += dlugoscCegielki;

            //liczenie pozycji wskaźnika
            leftWskaznik = leftValue - 6;
            //operacje na wskaźniku startu
            var start = document.getElementById('wskaznikStartu');
            start.remove();
            kanwaZadan.innerHTML += `<div id="wskaznikStartu" style="left:${leftWskaznik}px;"></div>`;

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
function dodajOdpowiedzialnego(){
    var sciezka = document.getElementById('sciezki').value;
    var kanwaZadan = document.getElementById('kanwaZadan');
    var iloscOsobProjekt = document.getElementById('listaOsob').value;
    var topValue = 55;
    var leftValue = 750;

    //liczenie pozycji wskaźnika startu
    if (sciezka > 1){
        topValue = 55 + (sciezka -1) * 80;
    };
    //ododawanie kółka odpowiedzialności
    if (iloscOsobProjekt > 1){
        leftValue = 750 + (iloscOsobProjekt - 1) * 40;

    }
    kanwaZadan.innerHTML += `<div id="kolko" style="top:${topValue}px; left:${leftValue}px;"></div>`;
}