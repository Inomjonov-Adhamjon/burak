// TASK L
// Shunday function yozing, u string qabul qilsin va string ichidagi 
// hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan 
// stringni qaytarsin.


// yechim:
function reverseSentence(str) {
    const word = str.split(" ")
    const teskari = word.map((word) => word.split("").reverse().join(""))

    return teskari.join(" ")
};

console.log(reverseSentence("we like coding"));
