/// <reference path="jquery.d.ts" />
var all = [
    "#nachname_autor",
    "#vorname_autor",
    "#titel",
    "#untertitel",
    "#nachname_herausgeber",
    "#vorname_herausgeber",
    "#titel_band",
    "#untertitel_band",
    "#erscheinungsort",
    "#erscheinungsjahr",
    "#seitenzahlen"
];
var monographie_elements = [
    "#nachname_autor",
    "#vorname_autor",
    "#titel_band",
    "#untertitel_band",
    "#erscheinungsort",
    "#erscheinungsjahr"
];

window.onload = function () {
    var dropDownMenu = document.getElementById("dropDownMenu");
    var selectButton = document.getElementById("selectButton");
    var test = $("#nachname_autor");
    $("#nachname_autor").addClass("required");
    all.forEach(function (element) {
        $(element).removeClass("required");
        $(element).addClass("unrequired");
    });
    monographie_elements.forEach(function (element) {
        $(element).removeClass("unrequired");
        $(element).addClass("required");
    });
    selectButton.onclick = function (ev) {
        var selection = dropDownMenu.options[dropDownMenu.selectedIndex].value;

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
                all.forEach(function (element) {
                    $(element).removeClass("required");
                    $(element).addClass("unrequired");
                });
                monographie_elements.forEach(function (element) {
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
    };
};
//@ sourceMappingURL=app.js.map
