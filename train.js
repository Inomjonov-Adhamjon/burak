// TASK M: 

// Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin
// va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni 
// kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.

// yechim:
function getSquareNumbers(numbers) {
    const result = numbers.map((number) => {
        return {
            number: number,
            square: number * number
        }

    });
    return result
}

const result = getSquareNumbers([1, 2, 3, 4]);
console.log(result)



// TASK L
// Shunday function yozing, u string qabul qilsin va string ichidagi 
// hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan 
// stringni qaytarsin.


// yechim:
// function reverseSentence(str) {
//     const word = str.split(" ")
//     const teskari = word.map((word) => word.split("").reverse().join(""))

//     return teskari.join(" ")
// };

// console.log(reverseSentence("we like coding"));
