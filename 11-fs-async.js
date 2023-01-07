const { readFile, writeFile } = require('fs')
console.log("start");


readFile('./content/first.txt', 'utf8', (err, result) => {

    if (err) {
        console.log(err);
        return
    }
    //console.log(result);
    const first = result;

    readFile('./content/second.txt', 'utf8', (err, result) => {

        if (err) {
            console.log(err);
            return
        }
        const second = result
        // gar aw dway sar baby err bu inja dyet write file bkat
        
        writeFile('./content/result-async.txt',
            `here is result ${first} , ${second} `,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return
                }
                console.log(result);
                // danuseret undifind kyshania jary eshakam bodakat write akat
                console.log("done");
            }
        )

    })
})

console.log("anotherone start ");
// lysraa jiawaze awaya  pysh away away tr done bkat dast dakat ba danayake tr

// gar utf8 nanusm awa bufferm badast dagat la jiate textaka  


// away sar asyc wata gar away yakam wargerawa inja away dwam wargretawa awa ta kotayee 