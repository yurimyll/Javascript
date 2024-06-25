function pularLinha() {
    document.write("<br>");
    document.write("<br>");

}

var ano = 2024;

document.write("Yuri tem " + (ano - 2006) + " anos");

pularLinha();

document.write("Felipe tem " + (ano - 1995) + " anos");

pularLinha();

ano = 2025;
document.write("Gabriel tem " + (ano - 1987) + " anos");
pularLinha();

var idadeYuri = 18;
var idadeFelipe = 29;
var idadeGabriel = 38;

var media = (idadeYuri + idadeFelipe + idadeGabriel)/3;
document.write("a media das idades é " + Math.round(media));
pularLinha();
var nome = "Yuri";

document.write("A idade de " + nome + " é " + idadeYuri)