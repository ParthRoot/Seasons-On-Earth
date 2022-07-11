let hemisphere;
let date;

//validate hemisphere
function valiDateHemisphere(hemisphere) {
    if (hemisphere === "S" || hemisphere === "N") {} else {
        alert("please select Valid Hemishpere!!");
        return;
    }
}

function getSeason() {
    hemisphere = document.getElementById("hemisphere").value;
    date = document.getElementById("date").value;

    if (hemisphere === "" || date === "") {
        alert("Please Fill Given Details");
        return;
    }

    let finalDate = new Date(date);
    let day = finalDate.getDate();
    let month = finalDate.getMonth() + 1;

    valiDateHemisphere(hemisphere);

    switch (hemisphere) {
        case "N":
            if (month == "3" || month == "4" || month == "5") {
                console.log("Spring");
            } else if (month == "6" || month == "7" || month == "8") {
                console.log("Summer");
            } else if (month == "9" || month == "10" || month == "11") {
                console.log("Autumn");
            } else if (month == "12" || month == "1" || month == "2") {
                console.log("Winter");
            }
            break;

        case "S":
            if (month == "3" || month == "4" || month == "5") {
                console.log("Autumn");
            } else if (month == "6" || month == "7" || month == "8") {
                console.log("Winter");
            } else if (month == "9" || month == "10" || month == "11") {
                console.log("Spring");
            } else if (month == "12" || month == "1" || month == "2") {
                console.log("Summer");
            }
            break;

        default:
            alert("Invalid Input");
    }
}