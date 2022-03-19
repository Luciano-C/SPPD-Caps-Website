const csvFile = document.querySelector("#formFileSm");
const submitButton = document.querySelector("#input-file-button");
const projectedCaps = document.querySelector("#projected_caps");

submitButton.addEventListener("click", () => {
    const input = csvFile.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
        let rankData = csvToArray(event.target.result);
        let isCorrectFile = !rankData.map(x => "MMR" in x).includes(false);

        if (isCorrectFile === true) {

        let total_caps = rankData.map(x => Number(x.MMR)).filter(Boolean).map(x => determineCaps(x)).reduce((total, x) => total + x, 0);
        projectedCaps.innerHTML = total_caps * 3;

        console.log(isCorrectFile);
        console.log(rankData);
        console.log(total_caps);
        }
        else {
            projectedCaps.innerHTML = "Poopie file";
        }

        // { "id": "[13055](https://sppdreplay.net/player/13055)","Name": "LUCKYBOLLO", "MMR": "9032","NK Level": "25","Donated": "54","Role": "co_leader","Join Date": "2021-12-06","Collection": "22"}
        
    }
    reader.readAsText(input);
});

function csvToArray(str, delimiter = ",") {
    // slice from start of text to the first \n index
    // use split to create an array from string by delimiter
    const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");

    // Map the rows
    // split values from each row into an array
    // use headers.reduce to create an object
    // object properties derived from headers:values
    // the object passed as an element of the array
    const arr = rows.map(function (row) {
        const values = row.split(delimiter);
        const el = headers.reduce(function (object, header, index) {
            object[header] = values[index];
            return object;
        }, {});
        return el;
    });

    return arr;
};


const arenas = {
    1: [0, 300, 10], 2: [300, 650, 10], 3: [650, 1200, 10],
    4: [1200, 1800, 12], 5: [1800, 2500, 18], 6: [2500, 3200, 25],
    7: [3200, 3900, 32], 8: [3900, 4600, 39], 9: [4600, 5300, 46],
    10: [5300, 6000, 53], 11: [6000, 6500, 60], 12: [6500, 7000, 65],
    13: [7000, 7500, 69], 14: [7500, 8000, 73], 15: [8000, 8500, 76],
    16: [8500, 1000000, 78]
};

function determineCaps(rank) {
    for (let arena in arenas) {
        if (rank >= arenas[arena][0] && rank < arenas[arena][1]) {
            let caps = arenas[arena][2];
            return caps;
        }
    }
}