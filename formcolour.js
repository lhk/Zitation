var all= ["#nachname_autor",
    "#vorname_autor",
    "#titel",
    "#untertitel",
    "#nachname_herausgeber",
    "#vorname_herausgeber",
    "#titel_band",
    "#untertitel_band",
    "#bandnummer",
    "#erscheinungsort",
    "#erscheinungsjahr",
    "#seitenzahlen"];

var monographie_elements= ["#nachname_autor",
    "#vorname_autor",
    "#titel",
    "#untertitel",
    "#erscheinungsort",
    "#erscheinungsjahr"];

var sammelband = ["#nachname_autor",
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

var fachzeitschrift = ["#nachname_autor",
    "#vorname_autor",
    "#titel",
    "#untertitel",
    "#titel_band",
    "#bandnummer",
    "#erscheinungsjahr",
    "#seitenzahlen"
];

var lexikonartikel = ["#nachname_autor",
    "#vorname_autor",
    "#titel",
    "#titel_band",
    "#bandnummer",
    "#erscheinungsjahr",
    "#seitenzahlen"
];


window.onload = function() {
    var dropDownMenu= document.getElementById("dropDownMenu");
    var selectButton= document.getElementById("selectButton");
    var test = $("#nachname_autor");
    $("#nachname_autor").addClass("required");
    all.forEach(function(element){
        $(element).removeClass("required");
        $(element).addClass("unrequired");
    });
    monographie_elements.forEach(function(element){
        $(element).removeClass("unrequired");
        $(element).addClass("required");
    });
    selectButton.onclick = function () {
        var selection = dropDownMenu.options[dropDownMenu.selectedIndex].value;

        var nachname_autor = $("#nachname_autor").val();
        var vorname_autor = $("#vorname_autor").val();
        var titel = $("#titel").val();
        var untertitel = $("#untertitel").val();
        var nachname_herausgeber = $("#nachname_herausgeber").val();
        var vorname_herausgeber = $("#vorname_herausgeber").val();
        var titel_band = $("#titel_band").val();
        var untertitel_band = $("#untertitel_band").val();
        var bandnummer = $("#bandnummer").val();
        var erscheinungsort = $("#erscheinungsort").val();
        var erscheinungsjahr = $("#erscheinungsjahr").val();
        var seitenzahlen = $("#seitenzahlen").val();
        var zitat = "";
        switch (selection) {
            case "monographie":
                zitat = "" + nachname_autor + ", " + vorname_autor + ": " + titel + ". " + untertitel + ", " + erscheinungsort + " " + erscheinungsjahr + ".";
                alert(zitat);
                break;
            case "sammelband":
                zitat = "" + nachname_autor + ", " + vorname_autor + ": " + titel + ". " + untertitel + ", in: " + nachname_herausgeber + ", " + vorname_herausgeber + " (Hg.): " + titel_band + ". " + untertitel_band + ", " + erscheinungsort + " " + erscheinungsjahr + ", S. " + seitenzahlen + ". ";
                alert(zitat);
                break;
            case "fachzeitschrift":
                zitat = "" + nachname_autor + ", " + vorname_autor + ": " + titel + ". " + untertitel + ", in: " + titel_band + " " + bandnummer + " (" + erscheinungsjahr + "), S. " + seitenzahlen + ". ";
                alert(zitat);
                break;
            case "lexikonartikel":
                zitat = "" + nachname_autor + ", " + vorname_autor + ": Art. " + titel + ", in: " + titel_band + " " + bandnummer + " (" + erscheinungsjahr + "), Sp. " + seitenzahlen + ". ";
                alert(zitat);
                break;
        }
        var p = document.createElement("p");
        p.innerHTML = zitat;
        document.body.appendChild(p);

    }
    dropDownMenu.onchange = function(ev){
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
                all.forEach(function(element){
                    $(element).removeClass("required");
                    $(element).addClass("unrequired");
                });
                monographie_elements.forEach(function(element){
                    $(element).removeClass("unrequired");
                    $(element).addClass("required");
                });
                break;
            case "sammelband":
                all.forEach(function (element) {
                    $(element).removeClass("required");
                    $(element).addClass("unrequired");
                });
                sammelband.forEach(function (element) {
                    $(element).removeClass("unrequired");
                    $(element).addClass("required");
                });
                break;
            case "fachzeitschrift":
                all.forEach(function (element) {
                    $(element).removeClass("required");
                    $(element).addClass("unrequired");
                });
                fachzeitschrift.forEach(function (element) {
                    $(element).removeClass("unrequired");
                    $(element).addClass("required");
                });
                break;
            case "lexikonartikel":
                all.forEach(function (element) {
                    $(element).removeClass("required");
                    $(element).addClass("unrequired");
                });
                lexikonartikel.forEach(function (element) {
                    $(element).removeClass("unrequired");
                    $(element).addClass("required");
                });
                break;
        }
    }
};