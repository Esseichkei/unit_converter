const KMTOMI = 0.621371;
const MITOKM = 1.60934;
const FTTOM = 0.3048;
const MTOFT = 3.28084;
const CMTOIN = 0.393701;
const INTOCM = 2.54;
function compute() {
    var quantity = Number.parseFloat(document.getElementById("quantity").value);
    var conversion_type = document.getElementById("units_chosen").value;
    switch (conversion_type) {
        case "kmtomi":
            document.getElementById("unit_display").innerHTML="KM";
            document.getElementById("result").innerHTML = (quantity * KMTOMI).toFixed(2) + " millas";
            break;
        case "mitokm":
            document.getElementById("unit_display").innerHTML="MI";
            document.getElementById("result").innerHTML = (quantity * MITOKM).toFixed(2) + " kil&oacute;metros";
            break;
        case "fttom":
            document.getElementById("unit_display").innerHTML="FT";
            document.getElementById("result").innerHTML = (quantity * FTTOM).toFixed(2) + " metros";
            break;
         case "mtoft":
            document.getElementById("unit_display").innerHTML="M";
            document.getElementById("result").innerHTML = (quantity * MTOFT).toFixed(2) + " pies";
            break;
        case "cmtoin":
            document.getElementById("unit_display").innerHTML="CM";
            document.getElementById("result").innerHTML = (quantity * CMTOIN).toFixed(2) + " pulgadas";
            break;
        case "intocm":
            document.getElementById("unit_display").innerHTML="IN";
            document.getElementById("result").innerHTML = (quantity * INTOCM).toFixed(2) + " cent&iacute;metros";
            break;
    }
}
function switcheroo() {
    var result_text = document.getElementById("result").innerHTML;
    var result_split = result_text.split(" ");
    var result_number = Number.parseFloat(result_split[0]);
    document.getElementById("quantity").value = result_number;
    var conversion_type = document.getElementById("units_chosen").value;
    switch(conversion_type) {
        case "kmtomi":
            document.getElementById("units_chosen").value = "mitokm";
            break;
        case "mitokm":
            document.getElementById("units_chosen").value = "kmtomi";
            break;
        case "fttom":
            document.getElementById("units_chosen").value = "mtoft";
            break;
        case "mtoft":
            document.getElementById("units_chosen").value = "fttom";
            break;
        case "cmtoin":
            document.getElementById("units_chosen").value = "intocm";
            break;
        case "intocm":
            document.getElementById("units_chosen").value = "cmtoin";
            break;
    }
    compute();
}
function save() {
    var start_number = Number.parseFloat(document.getElementById("quantity").value);
    var result_text = document.getElementById("result").innerHTML;
    var result_split = result_text.split(" ");
    var result_number = Number.parseFloat(result_split[0]);
    var conversion_type = document.getElementById("units_chosen").value;
    var i = 0;
    while (document.getElementById("saved" + i) != null) {
        i++;
    }
    var saved_span = "" + start_number;
    switch(conversion_type) {
        case "kmtomi":
            saved_span = saved_span + " KM to " + result_number + " MI";
            break;
        case "mitokm":
            saved_span = saved_span + " MI to " + result_number + " KM";
            break;
        case "fttom":
            saved_span = saved_span + " FT to " + result_number + " M";
            break;
        case "mtoft":
            saved_span = saved_span + " M to " + result_number + " FT";
            break;
        case "cmtoin":
            saved_span = saved_span + " CM to " + result_number + " IN";
            break;
        case "intocm":
            saved_span = saved_span + " IN to " + result_number + " CM";
            break;
    }
    document.getElementById("saved_conversions").innerHTML = document.getElementById("saved_conversions").innerHTML + "<div class=\"saved\" id=\"saved" + i + "\"><span id=\"saved" + i + "span\">" + saved_span + "</span><button id=\"saved" + i + "remove\" onclick=\"remove(" + i + ")\">X</button></div>";
}

function remove(which) {
    document.getElementById("saved" + which).remove();
}