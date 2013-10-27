/// <reference path="jquery.d.ts" />

var all: String[] = ["#nachname_autor",
    "#vorname_autor",
    "#titel",
    "#untertitel",
    "#nachname_herausgeber",
    "#vorname_herausgeber",
    "#titel_band",
    "#untertitel_band",
    "#erscheinungsort",
    "#erscheinungsjahr",
    "#seitenzahlen"];
var monographie_elements: String[] = ["#nachname_autor",
    "#vorname_autor",
    "#titel_band",
    "#untertitel_band",
    "#erscheinungsort",
    "#erscheinungsjahr"];


window.onload = () => {
    var dropDownMenu: HTMLSelectElement =<HTMLSelectElement> document.getElementById("dropDownMenu");
    var selectButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("selectButton");
    var test = $("#nachname_autor");
    $("#nachname_autor").addClass("required");
    all.forEach((element) => {
        $(element).removeClass("required");
        $(element).addClass("unrequired");
    });
    monographie_elements.forEach((element) => {
        $(element).removeClass("unrequired");
        $(element).addClass("required");
    });
    selectButton.onclick = (ev: MouseEvent) => {
        var selection= dropDownMenu.options[dropDownMenu.selectedIndex].value;

        var nachname_autor = $("#nachname_autor").val();
        var vorname_autor = $("#vorname_autor").val();
        var titel = $("#titel").val();
        var untertitel = $("#untertitel").val();
        var nachname_herausgeber = $("#nachname_herausgeber").val();
        var vorname_herausgeber = $("#vorname_herausgeber").val();
        var titel_band = $("#titel_band").val();
        var untertitel_band = $("#untertitel_band").val();
        var erscheinungsort = $("erscheinungsort").val();
        var erscheinungsjahr = $("erscheinungsjahr").val();
        var seitenzahlen = $("seitenzahlen").val();
                
        switch (selection) {
            case "monographie":
                all.forEach((element) => {
                    $(element).removeClass("required");
                    $(element).addClass("unrequired");
                });
                monographie_elements.forEach((element) => {
                    $(element).removeClass("unrequired");
                    $(element).addClass("required");
                });
                break;
            case "sammelband":
                alert("sammelband");
                break;
            case "fachzeitschrift":
                alert("fachzeitschrift");
                break;
            case "lexikonartikel":
                alert("lexikonartikel");
        }
    }
}