//written by : TAYYABA RAO
//Date: 18/feb/2024
//Roll no : 00388416

const magicians = ["Nimra","Irsa","Hafsa","khadija"];

function copyArray(arr: string[]): string[] {
    return [...arr];
}
    function make_great(magicians: string[]) {
        for (let i = 0; i < magicians.length; i ++) {
            magicians[i] = "the Great" + magicians[i];
        }
    }

    function show_magicians(magicians:string[]){
        for (const magician of magicians) {
            console.log(magician);
        }
    }

    const copiedMagicians = copyArray(magicians);

    make_great(copiedMagicians);

    console.log("Original Magicians:");

    show_magicians(magicians);

    console.log("\nModified Magicians:");
    show_magicians(copiedMagicians);