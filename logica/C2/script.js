function pularLinha() {
    document.write("<br>");
    document.write("<br>");

}

function mostra() {
    document.write()
    pularLinha();
}
var ano = 2024;

mostra("Yuri tem " + (ano - 2006) + " anos");



mostra("Felipe tem " + (ano - 1995) + " anos");



ano = 2025;
mostra("Gabriel tem " + (ano - 1987) + " anos");



var idadeYuri = 18;
var idadeFelipe = 29;
var idadeGabriel = 38;

var media = (idadeYuri + idadeFelipe + idadeGabriel)/3;
mostra("a media das idades é " + Math.round(media));



var nome = "Yuri";

mostra("A idade de " + nome + " é " + idadeYuri)