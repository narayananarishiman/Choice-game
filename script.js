document.getElementById("demo").innerHTML = "Spotykasz wieśniaka, co robisz ? " + "1. Atakujesz" + "2. Uciekasz" + "3.Oddaj skarby";

let roadChoice = "5";
let text = "";

while (roadChoice > 3 || roadChoice < 0) {
    let roadChoice = prompt("Co wybierasz ?");

    switch (roadChoice) {
        case "1":
            text = "Wieśniak otrzymuje obrażenia krytyczne i umiera";
            document.getElementById("demo").innerHTML + text;
            break;
        case "2":
            document.getElementById("demo").innerHTML = "Po drodze tracisz połowę swoich skarbów";
            break;
        case "3":
            document.getElementById("demo").innerHTML = "Wieśniak twierdzi, że nic nie chce więc zostawia Ci wszystkie skarby";
            break;
        default:
            document.getElementById("demo").innerHTML = "Wpisz prawidłową wartość";
    }
}

console.log("Today is a great day");