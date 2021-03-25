// Write your solution here!
const cats =["Milo", "Otis", "Garfield"];

console.log(cats)

function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat() {
    const copyCats = [...cats];
    copyCats.push("Broom");
    return copyCats
}

function prependCat() {
    const copyCats = [...cats];
    copyCats.unshift("Arnold");
    return copyCats
}


function removeLastCat() {
    const copyCats = [...cats];
    copyCats.pop();
    return copyCats
}

function removeFirstCat() {
    const copyCats = [...cats];
    copyCats.shift();
    return copyCats
}